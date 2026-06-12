"use client";

import Image from "next/image";
import { blurDataURL } from "../lib/shimmer";

export default function Careers() {
  return (
    <section id="careers" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="reveal-on-scroll">
            <span className="section-tag mb-6 block">Join Our Team</span>
            <h2 className="font-display text-5xl lg:text-6xl text-primary font-medium mb-10 italic">
              Excellence <br /> in Service
            </h2>
            <p className="text-secondary text-lg font-light leading-relaxed mb-12 max-w-md">
              We are constantly seeking dedicated professionals to join our six locations across Auckland. 
            </p>
            
            <div className="space-y-6 mb-12 border-l-2 border-accent pl-10">

              {[
                "Refined Work Environment",
                "Growth & Mentorship",
                "Competitive Compensation",
                "Diverse Team Culture"
              ].map((item) => (
                <div key={item} className="text-primary font-medium tracking-wide">
                  {item}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-minimal">
              View Openings
            </a>
          </div>

          <div className="reveal-on-scroll reveal-delay-2 relative">
            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-accent relative">
              <Image
                src="/images/SOCIAL%20SIZE-101.jpg"
                alt="Chef cooking at Mae Nam Khong"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-12 border border-accent hidden lg:block">
              <p className="text-primary font-display text-2xl italic">Now Hiring</p>
              <p className="text-secondary text-xs uppercase tracking-widest mt-2">All Departments</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
