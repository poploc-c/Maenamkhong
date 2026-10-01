"use client";

import { useEffect, useRef } from "react";

const scenes = [
  {
    image: "/images/SOCIAL%20SIZE-157.jpg",
    position: "center center",
    eyebrow: "Est. 2013 · New Lynn, Auckland",
    lines: ["Since 2013."],
  },
  {
    image: "/images/116C8935-9FDB-4044-94F1-16A972FAD94C.jpeg",
    position: "center 40%",
    lines: ["One family table,", "set for all of Auckland."],
  },
  {
    image: "/images/SOCIAL%20SIZE-130.jpg",
    position: "center center",
    lines: ["Authentic.", "Uncompromising.", "Thai."],
  },
  {
    image: "/images/8E4D0C0A-2627-4D08-A79D-FA81A4296CE0.jpeg",
    position: "center center",
    lines: ["Seven locations.", "One kitchen's soul."],
    eyebrow: "Auckland · Waikato · Growing",
  },
];

export default function StoryScroll() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const textEl = entry.target.querySelector<HTMLElement>(".story-inner");
          if (!textEl) return;
          if (entry.isIntersecting) {
            textEl.style.opacity = "1";
            textEl.style.transform = "translateY(0px)";
          } else {
            textEl.style.opacity = "0";
            textEl.style.transform = "translateY(28px)";
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {scenes.map((scene, i) => (
        <section
          key={i}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className="relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: "100svh" }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${scene.image}')`,
              backgroundSize: "cover",
              backgroundPosition: scene.position,
            }}
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,8,6,0.58)" }} />

          {/* Subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
            }}
          />

          {/* Text */}
          <div
            className="story-inner relative z-10 text-center px-8 max-w-4xl mx-auto"
            style={{
              opacity: 0,
              transform: "translateY(28px)",
              transition:
                "opacity 1s cubic-bezier(0.2,1,0.2,1), transform 1s cubic-bezier(0.2,1,0.2,1)",
            }}
          >
            {scene.eyebrow && (
              <span
                className="block mb-8 tracking-[0.45em] uppercase"
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "#C9A96E",
                  opacity: 0.9,
                }}
              >
                {scene.eyebrow}
              </span>
            )}

            <h2
              className="font-display font-light italic text-white"
              style={{
                fontSize: "clamp(2.8rem, 9vw, 6.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {scene.lines.map((line, j) => (
                <span
                  key={j}
                  className="block"
                  style={{
                    transitionDelay: `${j * 0.08}s`,
                  }}
                >
                  {line}
                </span>
              ))}
            </h2>

            {/* Gold accent line */}
            <div
              className="mx-auto mt-10"
              style={{
                width: "2.5rem",
                height: "1px",
                backgroundColor: "#C9A96E",
                opacity: 0.6,
              }}
            />
          </div>

          {/* Scene number */}
          <span
            className="absolute bottom-8 right-8 font-display font-light italic"
            style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em" }}
          >
            0{i + 1} / 0{scenes.length}
          </span>

          {/* Scroll hint on first scene only */}
          {i === 0 && (
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              style={{ opacity: 0.4 }}
            >
              <span
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                Scroll
              </span>
              <div
                style={{
                  width: "1px",
                  height: "2.5rem",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
                  animation: "storyPulse 2s ease-in-out infinite",
                }}
              />
            </div>
          )}
        </section>
      ))}

      <style>{`
        @keyframes storyPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.15); }
        }
      `}</style>
    </>
  );
}
