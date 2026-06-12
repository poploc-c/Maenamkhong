export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-cream"
      style={{ minHeight: "100svh" }}
    >
      {/* Background with darker contrast control */}
      <div 
        className="absolute inset-0 z-0 bg-[#F7F3EE]"
      >
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url('/images/SOCIAL%20SIZE-105.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      
      {/* Refined Geometric Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 border border-accent/40 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 border border-accent/30 rounded-full opacity-50 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        <span className="section-tag mb-8 block font-bold text-primary/40 tracking-[0.4em]">
          Est. 2013
        </span>

        <h1
          className="text-primary mb-8 font-display italic"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 8.5rem)",
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          Mae Nam Khong
        </h1>

        <div className="h-[2px] w-16 bg-primary/20 mx-auto mb-10" />

        <p
          className="text-primary max-w-xl mx-auto text-lg lg:text-xl font-light tracking-wide leading-relaxed mb-12 opacity-80"
        >
          An elevated journey through authentic Thai cuisine. <br className="hidden md:block" />
          Tradition refined for the modern Auckland palate.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#menu" className="btn-minimal">
            Our Menu
          </a>
          <a href="#contact" className="btn-outline-minimal">
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
