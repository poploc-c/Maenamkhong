const functionTypes = [
  {
    title: "Birthday Celebrations",
    description: "Reserve a section of the restaurant for your special day. Group menus available for parties of 10 or more.",
  },
  {
    title: "Corporate & Team Dining",
    description: "Ideal for team lunches, client dinners, and end-of-year celebrations. We'll take care of everything.",
  },
  {
    title: "Anniversary & Special Occasions",
    description: "Mark your milestone with an authentic Thai feast. Talk to us about setting the right table for your occasion.",
  },
];

export default function Catering() {
  return (
    <section id="catering" className="py-32 bg-cream border-y border-accent">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24 reveal-on-scroll">
          <div>
            <span className="section-tag mb-4 block">Group Bookings</span>
            <h2 className="font-display text-5xl lg:text-6xl text-primary font-light leading-none">
              Host Your <span className="italic">Function</span>
            </h2>
          </div>
          <p className="text-secondary font-light leading-relaxed lg:max-w-sm">
            Whether it's an intimate birthday dinner or a corporate team gathering —
            Mae Nam Khong is the perfect setting. We accommodate group bookings across our locations and can tailor the experience to suit your occasion.
          </p>
        </div>

        {/* Function types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent mb-24">
          {functionTypes.map((f, index) => (
            <div
              key={f.title}
              className={`bg-cream p-10 reveal-on-scroll reveal-delay-${index + 1}`}
            >
              <span className="text-primary/20 font-display text-5xl font-light block mb-6">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl text-primary mb-4 font-medium">{f.title}</h3>
              <div className="h-px w-10 bg-accent mb-6" />
              <p className="text-secondary text-sm font-light leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Info row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-14 border-y border-accent mb-16 reveal-on-scroll">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] font-black text-secondary mb-3">Group Size</p>
            <p className="font-display text-3xl text-primary font-light">10 – 80+ guests</p>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] font-black text-secondary mb-3">Locations</p>
            <p className="font-display text-3xl text-primary font-light">6 venues available</p>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] font-black text-secondary mb-3">Set Menus</p>
            <p className="font-display text-3xl text-primary font-light">Available on request</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal-on-scroll">
          <a href="#contact" className="btn-minimal">
            Enquire About Functions
          </a>
          <p className="text-secondary text-sm font-light">
            Or email us at{" "}
            <a
              href="mailto:info.maenamkhong@gmail.com"
              className="text-primary font-medium underline underline-offset-4"
            >
              info.maenamkhong@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
