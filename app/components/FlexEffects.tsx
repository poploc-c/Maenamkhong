"use client";

import { useEffect } from "react";

export default function FlexEffects() {
  useEffect(() => {
    // On mobile, skip observer — CSS media query handles visibility
    if (window.innerWidth < 1024) {
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll").forEach((el) => {
        el.classList.add("active");
      });
      return;
    }
    // Only run scroll reveal on desktop
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
