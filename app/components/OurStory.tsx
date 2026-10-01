"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { blurDataURL } from "../lib/shimmer";

const stats = [
  { value: "7", label: "Locations" },
  { value: "12+", label: "Years Serving Auckland" },
  { value: "50+", label: "Authentic Recipes" },
  { value: "2×", label: "Iconic Eats Award Winner" },
];

export default function OurStory() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsAnimated = useRef(false);

  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const statEls = container.querySelectorAll<HTMLElement>("[data-stat-value]");

    const parseValue = (raw: string) => {
      const match = raw.match(/^(\d+)(.*)$/);
      if (!match) return { target: 0, suffix: raw };
      return { target: parseInt(match[1], 10), suffix: match[2] };
    };

    const countUp = () => {
      if (statsAnimated.current) return;
      statsAnimated.current = true;

      const duration = 1800;
      const delay = 420; // wait for reveal clip-path

      setTimeout(() => {
        statEls.forEach((el) => {
          const raw = el.getAttribute("data-stat-value") ?? "";
          const { target, suffix } = parseValue(raw);
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.round(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        });
      }, delay);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          countUp();
          obs.unobserve(container);
        }
      },
      { threshold: 0 }
    );

    obs.observe(container);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="our-story" className="bg-[#111111] overflow-hidden">

      {/* ── Top: full-bleed image with text overlay ── */}
      <div className="relative min-h-[420px] flex items-end" style={{ height: "60svh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/images/116C8935-9FDB-4044-94F1-16A972FAD94C.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Dark gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-16">
          <span
            className="block text-[0.65rem] uppercase tracking-[0.45em] font-bold mb-5"
            style={{ color: "#C9A96E" }}
          >
            Est. 2013 · New Lynn, Auckland
          </span>
          <h2
            className="font-display text-white font-light italic leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Our Story
          </h2>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 lg:mb-32">

          {/* Left — large pull quote */}
          <div className="reveal-on-scroll">
            <div
              className="font-display italic text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              "A family table, set{" "}
              <span style={{ color: "#C9A96E" }}>for all of Auckland.</span>"
            </div>
            <div className="h-px w-16 mt-10 mb-10 section-line" style={{ backgroundColor: "#C9A96E" }} />
            <p className="text-white/50 text-sm leading-relaxed font-light max-w-sm">
              What began as one family's dream to share the food they grew up with has become
              one of Auckland's most beloved Thai restaurant groups.
            </p>
          </div>

          {/* Right — story paragraphs */}
          <div className="reveal-on-scroll space-y-7 text-white/75 text-[0.95rem] font-light leading-[1.85]">
            <p>
              Mae Nam Khong was born in 2013 out of a single conviction: that authentic
              Thai food — cooked the way it is in Thai family homes, not adapted or watered
              down — deserves a place at the heart of Auckland's dining scene. Our founders
              brought with them generations of recipes, the discipline of Thai home cooking,
              and an unwavering belief in generous hospitality.
            </p>
            <p>
              The name <em className="text-white not-italic font-medium">Mae Nam Khong</em> — the Thai name for the mighty Mekong River —
              reflects our roots. Like the river that winds through the landscapes of Southeast
              Asia, nourishing communities and cultures along its banks, our restaurants are
              built around nourishment: of the body, the spirit, and the community around us.
            </p>
            <p>
              Every dish on our menu is made from scratch using high-quality, fresh
              ingredients — fragrant lemongrass, kaffir lime, galangal, and Thai basil sourced
              with care. Our chefs follow traditional methods, from the slow-cooked massaman
              to the wok-kissed pad thai, refusing shortcuts in favour of flavour that is true
              to its origin.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-y reveal-on-scroll"
          style={{ borderColor: "rgba(201,169,110,0.2)" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-display text-4xl lg:text-5xl mb-2 font-light"
                style={{ color: "#C9A96E" }}
              >
                <span data-stat-value={s.value}>{s.value}</span>
              </p>
              <p className="text-white/40 text-[0.6rem] uppercase tracking-[0.25em] font-bold">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <p className="text-white/70 text-[0.95rem] font-light leading-[1.85] mb-8">
              Today, across seven locations from Herne Bay to Te Awamutu, the same
              values hold. We are still a family business. Our chefs still cook by hand.
              Our team still greet every guest as we would a neighbour. And every bowl,
              every plate, still carries the warmth of Thailand within it.
            </p>
            <p className="text-white/70 text-[0.95rem] font-light leading-[1.85]">
              We are proud to have won the{" "}
              <span className="text-white font-medium">Auckland Iconic Eats Award</span>{" "}
              twice — recognition not just for our food, but for what we stand for: a
              genuine, enduring connection between Thai culture and the people of New Zealand.
            </p>
          </div>

          {/* Photo */}
          <div className="reveal-on-scroll reveal-delay-2 relative">
            <div
              className="aspect-[4/3] overflow-hidden relative"
              style={{ border: "1px solid rgba(201,169,110,0.25)" }}
            >
              <Image
                src="/images/8E4D0C0A-2627-4D08-A79D-FA81A4296CE0.jpeg"
                alt="Mae Nam Khong restaurant interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#111111]/20" />
            </div>
            {/* Gold corner accent */}
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l hidden lg:block"
              style={{ borderColor: "#C9A96E" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
