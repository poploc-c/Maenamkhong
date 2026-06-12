"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { blurDataURL } from "../lib/shimmer";

const dishes = [
  {
    name: "Chicken Macadamia",
    thai: "ไก่ผัดเม็ดมะม่วงหิมพานต์",
    description: "Iconic Eats Award Winner. A delicious reimagining of classic sweet & sour with premium macadamia nuts.",
    image: "https://d1hfsnuz4i23pd.cloudfront.net/protected/ap-southeast-2:4a785247-e07c-c51d-9d7a-eaed83da2f65/2024-06-01_06:57:57.419-Chicken%20Macadamia.webp",
    award: "Iconic Eats 2026",
  },
  {
    name: "Drunken Spicy Duck",
    thai: "เป็ดผัดขี้เมา",
    description: "Iconic Eats 2025 Award Winner. A fabulous local favourite with intense Thai spices and perfectly roasted duck.",
    image: "https://assets.zyrosite.com/nN740yJ5ic0jxryD/image-17993-q3OT1Osla9hpPGko.png",
    award: "Iconic Eats 2025",
  },
  {
    name: "Pad See Eew",
    thai: "ผัดซีอิ๊ว",
    description: "Fresh flat rice noodle wok-fried with egg, market greens and broccoli.",
    image: "https://d1hfsnuz4i23pd.cloudfront.net/protected/ap-southeast-2:4a785247-e07c-c51d-9d7a-eaed83da2f65/2024-06-01_06:56:45.302-Pad%20See%20Eew.webp",
  },
  {
    name: "Pad Thai",
    thai: "ผัดไทย",
    description: "Rice noodle wok-fried with egg, chive, tofu, beansprout & crushed peanuts",
    image: "/images/SOCIAL%20SIZE-120.jpg",
  },
  {
    name: "Pork Prik Khing",
    thai: "หมูผัดพริกขิง",
    description: "Pork belly sautéed with beans, carrot, red curry and smoked chilli jam.",
    image: "/images/SOCIAL%20SIZE-135.jpg",
  },
  {
    name: "Slow Cooked Beef Cheek",
    thai: "มัสมั่นแก้มวัว",
    description: "Massaman curry w/ baby potatoes, onion, fried shallot & peanut",
    image: "/images/SOCIAL%20SIZE-131.jpg",
  },
  {
    name: "Papaya Salad",
    thai: "ส้มตำ",
    description: "Papaya salad smashed with lemon & chilli, green beans, tomatoes + peanuts",
    image: "/images/SOCIAL%20SIZE-141.jpg",
  },
  {
    name: "Spicy Basil",
    thai: "ผัดกระเพรา",
    description: "Fresh basil wok-fried with chilli, garlic and fried egg over rice.",
    image: "/images/SOCIAL%20SIZE-136.jpg",
  },
];

export default function MenuShowcase() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Mobile only — desktop uses CSS hover
    if (window.innerWidth >= 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    imageRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-24 reveal-on-scroll">
          <span className="section-tag mb-4">Our Specialties</span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary italic">
            Signature Dishes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {dishes.map((dish, index) => (
            <div key={dish.name} className={`reveal-on-scroll reveal-delay-${(index % 3) + 1}`}>
              <div
                ref={(el) => { imageRefs.current[index] = el; }}
                className="dish-image-wrap aspect-[4/5] overflow-hidden bg-white mb-8 relative group"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover scale-100 lg:group-hover:scale-105 transition-transform duration-1000"
                />
                {"award" in dish && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-[0.6rem] font-black uppercase tracking-[0.2em] py-2 px-4 shadow-xl">
                    {String(dish.award)}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <h3 className="font-display text-3xl text-primary font-medium">{dish.name}</h3>
              </div>
              <p className="text-secondary text-[0.7rem] tracking-[0.2em] uppercase mb-6 font-bold">{dish.thai}</p>
              <p className="text-primary/70 text-sm leading-relaxed font-light">{dish.description}</p>


            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal-on-scroll">
          <a href="#branches" className="btn-minimal">
            Full Menu & Reservations
          </a>
        </div>
      </div>
    </section>
  );
}
