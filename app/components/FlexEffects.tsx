"use client";

import { useEffect } from "react";

export default function FlexEffects() {
  useEffect(() => {
    // On mobile — make everything visible immediately
    if (window.innerWidth < 1024) {
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll").forEach((el) => {
        el.classList.add("active");
      });
      return;
    }

    const allEls = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");

    // 1. Mark elements already in viewport as active BEFORE enabling clip-path
    allEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add("active");
      }
    });

    // 2. Now enable the clip-path animation (only elements NOT yet active will be hidden)
    document.body.classList.add("scroll-ready");

    // 3. Set up observer for below-fold elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    allEls.forEach((el) => {
      if (!el.classList.contains("active")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
