"use client";

import { useState, useEffect } from "react";

const navLinks = [
  {
    label: "Menu",
    href: "#menu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    ),
  },
  {
    label: "Branches",
    href: "#branches",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Order",
    href: "#branches",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm1 3v4h3l-4 5-4-5h3V7h2z" />
      </svg>
    ),
    highlight: true,
  },
  {
    label: "Functions",
    href: "#catering",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top bar (desktop + mobile brand only) ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#EAEAEA]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 max-w-7xl mx-auto">
          {/* Brand */}
          <a href="#" className="flex flex-col">
            <span className="text-[#111111] text-lg font-display font-bold uppercase tracking-widest">
              Mae Nam Khong
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.filter((l) => !l.highlight).map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-[#111111] hover:opacity-50 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#branches"
              className="bg-[#111111] text-white px-6 py-2 text-xs font-black uppercase tracking-widest rounded"
            >
              Order
            </a>
          </div>
        </div>
      </nav>

      {/* ── Mobile bottom tab bar ── */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-[#EAEAEA]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-stretch">
          {navLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors duration-150 ${
                link.highlight
                  ? "bg-[#111111] text-white"
                  : active === link.label
                  ? "text-[#111111]"
                  : "text-[#70685C]"
              }`}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", transition: "opacity 0.15s ease" }}
              onTouchStart={(e) => (e.currentTarget.style.opacity = "0.5")}
              onTouchEnd={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span className={link.highlight ? "text-white" : ""}>{link.icon}</span>
              <span
                className={`text-[0.52rem] uppercase tracking-widest font-bold leading-none ${
                  link.highlight ? "text-white" : ""
                }`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
