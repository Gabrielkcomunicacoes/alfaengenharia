"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Ensures every page load and navigation lands at the top of the page (or
// at the target anchor, if the URL carries one) instead of keeping a
// previous scroll position, which browsers otherwise restore on their own.
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
