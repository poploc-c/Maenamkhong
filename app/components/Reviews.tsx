const reviews = [
  {
    name: "Hilda L.",
    badge: "Local Guide · 63 reviews",
    time: "6 months ago",
    dining: "Dine in · Dinner",
    rating: 5,
    text: "It is a nice place to have a catch-up with friends, great atmosphere. Food was good — we love the Pad Thai, the Red Curry was nice and the Mango Sticky Rice was a great dish.",
  },
  {
    name: "Abhijit Roy",
    badge: "Local Guide · 52 reviews",
    time: "4 months ago",
    dining: "Dine in · Lunch",
    rating: 5,
    text: "Amazing food and ambience for the class and price. We tried the Macadamia Chicken and Green Curry Chicken — both were mouthwatering.",
  },
  {
    name: "Plu Ju",
    badge: "Local Guide · 33 reviews",
    time: "8 months ago",
    dining: "Takeaway",
    rating: 5,
    text: "Ordered 3 meals to take away — Pad Thai, Chicken Macadamia, and Pad See Eew. In general, the food was good and it's got a fire taste.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-6">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A96E">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="mb-20 reveal-on-scroll flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span
              className="block text-[0.65rem] uppercase tracking-[0.45em] font-black mb-5"
              style={{ color: "#C9A96E" }}
            >
              Google Reviews — New Lynn
            </span>
            <h2
              className="font-display text-white font-light italic leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              What Our Guests Say
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/Mae+Nam+Khong/@-36.9063,174.6856,17z"
            target="_blank"
            className="text-[0.65rem] font-black uppercase tracking-[0.3em] border-b pb-1 transition-colors shrink-0"
            style={{ color: "#C9A96E", borderColor: "rgba(201,169,110,0.4)" }}
          >
            Read All Reviews ↗
          </a>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-[#111111] p-10 reveal-on-scroll reveal-delay-${i + 1}`}
            >
              <Stars count={review.rating} />

              <blockquote
                className="font-display italic text-white/90 leading-relaxed mb-10"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
              >
                "{review.text}"
              </blockquote>

              <div className="border-t pt-8" style={{ borderColor: "rgba(201,169,110,0.2)" }}>
                <p className="text-white font-bold text-sm">{review.name}</p>
                <p className="text-white/40 text-[0.65rem] uppercase tracking-widest mt-1">
                  {review.badge}
                </p>
                <p className="text-white/30 text-[0.65rem] mt-2">
                  {review.dining} · {review.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-16 flex items-center justify-center gap-6 reveal-on-scroll">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C9A96E">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-white/50 text-sm font-light">
            Rated on <span className="text-white font-medium">Google</span>
          </p>
        </div>

      </div>
    </section>
  );
}
