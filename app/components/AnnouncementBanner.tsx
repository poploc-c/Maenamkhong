"use client";

import { useState } from "react";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="w-full flex items-center justify-center gap-4 px-6 py-3 text-white relative"
      style={{ backgroundColor: "#C9A96E" }}
    >
      <p className="text-xs sm:text-sm font-medium tracking-wide text-center leading-snug">
        <span className="font-bold">🎉 River Khong, Te Awamutu</span>
        {" "}is now part of the Mae Nam Khong family —{" "}
        <a
          href="https://venues.heybustle.com/NZ/river-khong"
          target="_blank"
          className="underline underline-offset-2 font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Order Online Now →
        </a>
      </p>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Close"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity text-white"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
