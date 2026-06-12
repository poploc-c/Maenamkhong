"use client";

const WORDS = [
  "Mae Nam Khong",
  "Authentic Thai",
  "Auckland",
  "Est. 2013",
  "Award Winning",
  "Refined Tradition",
  "Family Dining",
  "6 Locations",
];

const CONTENT = WORDS.join("  ·  ") + "  ·  ";

export default function MarqueeStrip({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`overflow-hidden py-5 ${
        isDark ? "bg-[#111111]" : "bg-cream border-y border-accent"
      }`}
      aria-hidden="true"
    >
      <div className="marquee-track flex whitespace-nowrap">
        {/* Duplicate content twice for seamless infinite loop */}
        <span
          className={`marquee-content inline-block text-[0.62rem] uppercase tracking-[0.35em] font-bold select-none ${
            isDark ? "text-[#D9D2C7]" : "text-secondary"
          }`}
        >
          {CONTENT.repeat(6)}
        </span>
        <span
          className={`marquee-content inline-block text-[0.62rem] uppercase tracking-[0.35em] font-bold select-none ${
            isDark ? "text-[#D9D2C7]" : "text-secondary"
          }`}
          aria-hidden="true"
        >
          {CONTENT.repeat(6)}
        </span>
      </div>
    </div>
  );
}
