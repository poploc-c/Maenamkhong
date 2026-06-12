const locations = [
  { name: "New Lynn", href: "https://www.google.com/maps?q=mae+nam+khong+2-4+Todd+Plaza+New+Lynn" },
  { name: "Titirangi Village", href: "https://maps.app.goo.gl/LPjKw7QiGmttTF7d7" },
  { name: "Herne Bay — Onzon De", href: "https://maps.google.com/?q=186+Jervois+Road+Herne+Bay+Auckland" },
  { name: "St Johns", href: "https://maps.google.com/?q=4/115+Felton+Mathew+Avenue+St+Johns+Auckland" },
  { name: "BBQ Buffet — New Lynn", href: "https://maps.google.com/?q=1+McCrae+Way+New+Lynn+Auckland" },
  { name: "River Khong — Te Awamutu", href: "https://maps.google.com/?q=104+George+Street+Te+Awamutu+3800" },
];

const navLinks = [
  { label: "Our Story", href: "#our-story" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#branches" },
  { label: "Functions", href: "#catering" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram — MNK",
    href: "https://www.instagram.com/maenamkhongakl/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Instagram — BBQ",
    href: "https://www.instagram.com/maenamkhong_bbq/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Instagram — Onzon De",
    href: "https://www.instagram.com/onzon.de/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MaeNamKhongRestaurant/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display italic text-2xl lg:text-3xl text-white/90">
            Ready to dine with us?
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#111111] text-[0.7rem] font-black uppercase tracking-widest hover:bg-[#F7F3EE] transition-colors"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-6 py-3 border border-white/30 text-white text-[0.7rem] font-black uppercase tracking-widest hover:border-white transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-white block mb-6">
              Mae Nam Khong
            </span>
            <p className="text-white/50 text-sm leading-relaxed font-light mb-8">
              Authentic Thai cuisine crafted with tradition. Est. 2013, New Lynn Auckland.
            </p>
            <div className="space-y-2">
              <p className="text-white/40 text-xs">
                <a href="tel:+6498264002" className="hover:text-white transition-colors">(09) 826 4002</a>
              </p>
              <p className="text-white/40 text-xs">
                <a href="mailto:info.maenamkhong@gmail.com" className="hover:text-white transition-colors">info.maenamkhong@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[0.6rem] uppercase tracking-widest font-black text-white/40 mb-8">Our Locations</h4>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <a
                    href={loc.href}
                    target="_blank"
                    className="text-white/60 text-xs font-light hover:text-white transition-colors leading-relaxed"
                  >
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[0.6rem] uppercase tracking-widest font-black text-white/40 mb-8">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-xs font-light hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[0.6rem] uppercase tracking-widest font-black text-white/40 mb-8">Follow Us</h4>
            <ul className="space-y-4">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    className="flex items-center gap-3 text-white/60 text-xs font-light hover:text-white transition-colors group"
                  >
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[0.65rem] uppercase tracking-widest">
            &copy; {year} Mae Nam Khong. All Rights Reserved.
          </p>
          <p className="text-white/30 text-[0.65rem] uppercase tracking-widest italic">
            Tradition Refined · Est. 2013
          </p>
        </div>
      </div>
    </footer>
  );
}
