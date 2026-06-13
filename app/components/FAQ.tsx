"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the best Thai restaurant in New Lynn?",
    answer:
      "Mae Nam Khong is a family-owned Thai restaurant in New Lynn, known for authentic Thai cuisine, award-winning dishes and warm hospitality. We've been serving West Auckland since 2013 and are proud recipients of the Auckland Iconic Eats Award.",
  },
  {
    question: "Do you offer takeaway and delivery in Auckland?",
    answer:
      "Yes. We offer takeaway directly from our New Lynn restaurant, and we deliver throughout Auckland via Uber Eats and DoorDash. Whether you're in West Auckland, Titirangi, Glen Eden, Avondale or further — great Thai food is never far away.",
  },
  {
    question: "What is Moo Kata and do you serve it in Auckland?",
    answer:
      "Moo Kata is a traditional Thai tabletop BBQ and hotpot experience — a social, hands-on way to share a meal with family and friends. Mae Nam Khong is one of the few Auckland restaurants serving authentic Moo Kata. It's best enjoyed as a group and is available at our New Lynn location.",
  },
  {
    question: "Do you take group bookings?",
    answer:
      "Absolutely. We love a celebration. We welcome groups of all sizes — from intimate family dinners to large birthday parties and corporate events. Contact us in advance and we'll take care of the rest.",
  },
  {
    question: "Where are you located near LynnMall?",
    answer:
      "We're at 2-4 Todd Plaza, New Lynn — a short walk from LynnMall and close to New Lynn train and bus interchange. Plenty of public parking is available on McCrae Way and Totara Ave.",
  },
  {
    question: "Do you offer catering services in Auckland?",
    answer:
      "Yes. Our catering team brings authentic Thai flavours to your venue — perfect for corporate functions, private parties and community events. Get in touch to discuss your requirements.",
  },
  {
    question: "Is Mae Nam Khong family-friendly?",
    answer:
      "Very much so. We love welcoming families to our restaurant. Our menu has something for all ages, and our team always goes the extra mile to make sure everyone feels at home.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#F7F3EE]">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <div className="mb-20 reveal-on-scroll">
          <span className="section-tag mb-4 block">Have Questions?</span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary font-medium">
            FAQ
          </h2>
          <div className="h-px w-24 bg-accent mt-8" />
        </div>

        <div className="space-y-0 reveal-on-scroll">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-primary/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-7 text-left gap-6 group"
              >
                <span className="text-primary font-medium text-base lg:text-lg leading-snug group-hover:text-accent transition-colors duration-200">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-5 h-5 relative text-primary/30 group-hover:text-accent transition-colors duration-200">
                  <span
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="text-primary/60 text-base leading-relaxed pb-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
