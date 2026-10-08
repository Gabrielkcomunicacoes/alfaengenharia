"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordInteraction } from "../measurement";

// Blocos que entram com revelação mesmo sem data-reveal no JSX.
const AUTO_REVEAL = [
  ".faq-list details",
  ".complementary-group",
  ".portfolio-project",
  ".work-photo",
  ".preparation-list li",
  ".contact > *",
  ".footer-main > *",
  ".credibility p",
].join(",");

export function SiteEnhancements() {
  const pathname = usePathname();
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 599px)");
    document.querySelectorAll<HTMLElement>(AUTO_REVEAL).forEach((element, index) => {
      if (element.closest("[data-reveal]")) return;
      element.dataset.reveal = "";
      element.dataset.revealDelay = String((index % 4) * 60);
    });
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const seen = new WeakSet<HTMLElement>();
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

    // Só elementos abaixo da dobra recebem a animação de chegada: eles são
    // escondidos antes de entrar na tela e aparecem por transição. O que já
    // está visível nunca é escondido, evitando piscadas.
    const timers = new Set<number>();
    function settle(element: HTMLElement) {
      element.classList.remove("rv", "rv-in");
      element.style.removeProperty("--rv-delay");
    }
    function reveal(element: HTMLElement) {
      if (seen.has(element)) return;
      seen.add(element);
      observer?.unobserve(element);
      const compact = compactLayout.matches;
      const requested = Number(element.dataset.revealDelay || 0);
      const delay = compact ? 0 : Math.min(120, Math.max(0, Number.isFinite(requested) ? requested : 0));
      element.style.setProperty("--rv-delay", delay + "ms");
      requestAnimationFrame(() => element.classList.add("rv-in"));
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        settle(element);
      }, 1100 + delay);
      timers.add(timer);
    }

    function configureMotion() {
      observer?.disconnect();
      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        elements.forEach(settle);
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
      );
      elements.forEach((element) => {
        if (seen.has(element)) return;
        const rect = element.getBoundingClientRect();
        // Já visível (ou acima da tela): não anima.
        if (rect.top < window.innerHeight * 0.96) {
          seen.add(element);
          return;
        }
        if (element.contains(document.activeElement)) return;
        element.classList.add("rv");
        observer?.observe(element);
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
      for (const element of elements) {
        if (element.contains(event.target as Node)) settle(element);
      }
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
      timers.forEach((timer) => clearTimeout(timer));
      elements.forEach(settle);
      reducedMotion.removeEventListener("change", configureMotion);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("error", onImageError, true);
    };
  }, [pathname]);
  return null;
}
