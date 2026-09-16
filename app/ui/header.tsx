"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, whatsappUrl } from "../site-content";
import { OfficialLogo } from "./official-logo";
export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
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
    // Progress reflects scroll position within the current page only.
    let frame = 0;
    const paint = () => {
      frame = 0;
      const range = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const value = Math.min(1, Math.max(0, window.scrollY / range));
      if (progress.current) progress.current.style.transform = `scaleX(${value})`;
      header.current?.toggleAttribute("data-scrolled", window.scrollY > 32);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    paint();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header" ref={header}>
        <div className="header-inner container">
          <Link href="/" className="brand-home" aria-label="Alfa Engenharia, início">
            <OfficialLogo decorative />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {content.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
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
            <summary aria-label="Menu de navegação" aria-controls="mobile-navigation">
              <span className="menu-label">Menu</span>
              <span className="menu-lines" aria-hidden="true" />
            </summary>
            <nav id="mobile-navigation" aria-label="Navegação mobile">
              {content.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => closeMenu()}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
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
