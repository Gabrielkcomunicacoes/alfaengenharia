"use client";
import { useEffect } from "react";
import { recordInteraction } from "../measurement";

export function SiteEnhancements() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 599px)");
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const seen = new WeakSet<HTMLElement>();
    const animations = new Map<Animation, HTMLElement>();
    let observer: IntersectionObserver | undefined;

    // Recover a failed responsive image once using its independent JPEG source.
    function restoreOriginal(image: HTMLImageElement) {
      const original = image.dataset.originalSrc;
      if (!original) return;
      if (image.getAttribute("src") === original && !image.hasAttribute("srcset"))
        return;
      image.removeAttribute("srcset");
      image.removeAttribute("sizes");
      image.src = original;
    }
    const onImageError = (event: Event) => {
      if (event.target instanceof HTMLImageElement) restoreOriginal(event.target);
    };
    document.addEventListener("error", onImageError, true);
    document.querySelectorAll<HTMLImageElement>("img[data-original-src]").forEach((image) => {
      // Image errors can happen before React hydrates. Pending lazy images are
      // not complete and must retain their optimized source until requested.
      if (image.complete && image.naturalWidth === 0) restoreOriginal(image);
    });

    function reveal(element: HTMLElement) {
      if (seen.has(element)) return;
      seen.add(element);
      observer?.unobserve(element);
      // HTML and CSS are visible from the first render. Never hide focused content.
      if (
        reducedMotion.matches ||
        !element.animate ||
        element.contains(document.activeElement)
      )
        return;

      const compact = compactLayout.matches;
      const variant = element.dataset.reveal;
      const distance = compact ? 14 : 24;
      let transform = `translate3d(0, ${distance}px, 0)`;
      if (!compact && variant === "left")
        transform = "translate3d(-20px, 0, 0)";
      if (!compact && variant === "right")
        transform = "translate3d(20px, 0, 0)";
      if (variant === "image")
        transform = `translate3d(0, ${compact ? 8 : 14}px, 0) scale(1.035)`;
      const requestedDelay = Number(element.dataset.revealDelay || 0);
      const delay = compact
        ? 0
        : Math.min(
            120,
            Math.max(0, Number.isFinite(requestedDelay) ? requestedDelay : 0),
          );
      const animation = element.animate(
        [
          { opacity: variant === "image" ? 0.65 : 0.22, transform },
          { opacity: 1, transform: "none" },
        ],
        {
          duration: compact ? 460 : variant === "image" ? 650 : 620,
          delay,
          easing: "cubic-bezier(.22,.72,.25,1)",
          fill: "backwards",
        },
      );
      animation.id = `alfa-reveal:${variant || "up"}`;
      animations.set(animation, element);
      const release = () => animations.delete(animation);
      animation.onfinish = release;
      animation.oncancel = release;
    }

    function configureMotion() {
      observer?.disconnect();
      animations.forEach((_, animation) => animation.cancel());
      animations.clear();
      if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
      );
      elements.forEach((element) => {
        if (!seen.has(element)) observer?.observe(element);
      });
    }
    configureMotion();
    reducedMotion.addEventListener("change", configureMotion);

    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const element of elements) {
        if (element.contains(event.target)) {
          seen.add(element);
          observer?.unobserve(element);
        }
      }
      animations.forEach((element, animation) => {
        if (element.contains(event.target as Node)) animation.cancel();
      });
    };
    const handleClick = (event: MouseEvent) => {
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[data-track]")
          : null;
      if (!link) return;
      const type = link.dataset.track;
      if (type === "whatsapp" || type === "email") {
        recordInteraction(
          type === "whatsapp" ? "whatsapp_click" : "email_click",
          {
            location: link.dataset.location || "unknown",
            service: link.dataset.service,
          },
        );
      }
    };
    document.addEventListener("focusin", onFocus);
    document.addEventListener("click", handleClick);
    return () => {
      observer?.disconnect();
      animations.forEach((_, animation) => animation.cancel());
      reducedMotion.removeEventListener("change", configureMotion);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("error", onImageError, true);
    };
  }, []);
  return null;
}
