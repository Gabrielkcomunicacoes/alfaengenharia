"use client";
import { useEffect, useRef, useState } from "react";
import { content, whatsappUrl } from "../site-content";
import { OfficialLogo } from "./official-logo";
export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const [activeSection, setActiveSection] = useState("");
  function closeMenu(returnFocus = false) {
    if (!menu.current) return;
    menu.current.open = false;
    if (returnFocus) menu.current.querySelector("summary")?.focus();
  }
  useEffect(() => {
    const element = menu.current;
    if (!element) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && element.open) closeMenu(true);
    };
    const onPointer = (event: PointerEvent) => {
      if (element.open && !element.contains(event.target as Node)) closeMenu();
    };
    const breakpoint = window.matchMedia("(min-width: 900px)");
    const onResize = () => {
      if (breakpoint.matches) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    breakpoint.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      breakpoint.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    const sections = content.navigation.map((item) => ({
      href: item.href,
      element: document.querySelector<HTMLElement>(item.href),
      top: 0,
    }));
    let frame = 0;
    let disposed = false;
    let scrollRange = 1;
    let activationOffset = 140;
    let previousSection = "";

    const paint = () => {
      frame = 0;
      const y = window.scrollY;
      const value = Math.min(1, Math.max(0, y / scrollRange));
      if (progress.current)
        progress.current.style.transform = `scaleX(${value})`;
      header.current?.toggleAttribute("data-scrolled", y > 32);
      let current = "";
      for (const section of sections) {
        if (section.element && section.top <= y + activationOffset)
          current = section.href;
      }
      // State changes only at section boundaries, never on every animation frame.
      if (current !== previousSection) {
        previousSection = current;
        setActiveSection(current);
      }
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    const measure = () => {
      if (disposed) return;
      for (const section of sections) {
        section.top = section.element
          ? section.element.getBoundingClientRect().top + window.scrollY
          : Infinity;
      }
      scrollRange = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      activationOffset = (header.current?.offsetHeight || 90) + 56;
      schedule();
    };
    const resize =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : undefined;
    resize?.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    document.fonts.ready.then(measure);
    measure();
    return () => {
      disposed = true;
      resize?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header" ref={header}>
        <div className="header-inner container">
          <a
            href="#"
            className="brand-home"
            aria-label="Alfa Engenharia, início"
          >
            <OfficialLogo decorative />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.href ? "location" : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="button button-header"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp"
            data-location="header"
          >
            Falar com a Alfa <span aria-hidden="true">↗</span>
          </a>
          <details className="mobile-menu" ref={menu}>
            <summary
              aria-label="Menu de navegação"
              aria-controls="mobile-navigation"
            >
              <span className="menu-label">Menu</span>
              <span className="menu-lines" aria-hidden="true" />
            </summary>
            <nav id="mobile-navigation" aria-label="Navegação mobile">
              {content.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    activeSection === item.href ? "location" : undefined
                  }
                  onClick={() => {
                    closeMenu();
                    document
                      .querySelector<HTMLElement>(item.href)
                      ?.focus({ preventScroll: true });
                  }}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
              <a
                className="mobile-contact"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => closeMenu()}
                data-track="whatsapp"
                data-location="mobile-menu"
              >
                Falar com a Alfa ↗
              </a>
            </nav>
          </details>
        </div>
        <div className="reading-progress" aria-hidden="true">
          <span ref={progress} />
        </div>
      </header>
    </>
  );
}
