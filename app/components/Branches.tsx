"use client";

type Branch = {
  id: string;
  name: string;
  subtitle?: string;
  tagline?: string;
  address: string;
  addressNote?: string;
  phone: string;
  phoneNote?: string;
  hours: string;
  mapUrl?: string;
  orderUrl?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  socialUrl?: string;
  icon: string;
  tag?: string;
  comingSoon?: boolean;
};

const branches: Branch[] = [
  {
    id: "01",
    name: "Mae Nam Khong",
    subtitle: "New Lynn",
    address: "2-4 Todd Plaza, New Lynn, Auckland",
    addressNote: "Next to New Lynn Police Station",
    phone: "(09) 826 4002",
    phoneNote: "BYO Wine",
    hours: "12–3 pm · 4:30–9 pm (Fri–Sat until 9:30 pm)",
    mapUrl: "https://www.google.com/maps?q=mae+nam+khong+2-4+Todd+Plaza+New+Lynn",
    orderUrl: "https://venues.heybustle.com/NZ/mae-nam-khong-new-lynn",
    socialUrl: "https://www.instagram.com/maenamkhongakl/",
    icon: "LOCATION",
  },
  {
    id: "02",
    name: "Street Feast",
    subtitle: "Titirangi Village",
    address: "Street Feast, The Rise Building, Titirangi",
    phone: "09 218 3320",
    hours: "12–9:30 pm Fri–Sat · 12–8:30 pm Tue–Thu & Sun · Closed Mon",
    mapUrl: "https://maps.app.goo.gl/LPjKw7QiGmttTF7d7",
    orderUrl: "https://venues.heybustle.com/NZ/mae-nam-khong-street-feast",
    socialUrl: "https://www.instagram.com/maenamkhongakl/",
    icon: "LOCATION",
  },
  {
    id: "03",
    name: "Onzon de Thai Kitchen",
    subtitle: "Herne Bay",
    address: "186 Jervois Road, Herne Bay, Auckland",
    phone: "09 360 0714",
    phoneNote: "BYO Wine",
    hours: "Until 8:45pm (9:15pm Fri-Sat)",
    mapUrl: "https://maps.google.com/?q=186+Jervois+Road+Herne+Bay+Auckland",
    orderUrl: "https://venues.heybustle.com/NZ/onzon-de-thai-kitchen",
    websiteUrl: "https://www.onzonde.co.nz/",
    socialUrl: "https://www.instagram.com/onzon.de/",
    icon: "LOCATION",
    tag: "Sister Branch",
  },
  {
    id: "04",
    name: "Mae Nam Khong",
    subtitle: "St Johns · Takeaway",
    tagline: "Quality quick Thai fix · Self-service",
    address: "4/115 Felton Mathew Avenue, St Johns",
    phone: "(09) 212 0011",
    hours: "11:30 am–3 pm · 4–9 pm (Fri–Sat until 9:30 pm)",
    mapUrl: "https://maps.google.com/?q=4/115+Felton+Mathew+Avenue+St+Johns+Auckland",
    orderUrl: "https://order.tabin.co.nz/869a69e5-ac88-4ad8-b926-baf12379cd7a",
    websiteUrl: "https://mnkstjohns.co.nz/",
    socialUrl: "https://www.instagram.com/maenamkhongakl/",
    icon: "LOCATION",
    tag: "Takeaway",
  },
  {
    id: "05",
    name: "Mae Nam Khong BBQ",
    subtitle: "Buffet New Lynn",
    address: "1 McCrae Way, New Lynn",
    addressNote: "Corner of New Lynn Station",
    phone: "027 890 5118",
    phoneNote: "Text only",
    hours: "Fri–Sun 12–9:30 pm · Mon–Thu 3–9 pm",
    mapUrl: "https://maps.google.com/?q=1+McCrae+Way+New+Lynn+Auckland",
    websiteUrl: "https://www.maenamkhongbbq.co.nz/",
    socialUrl: "https://www.instagram.com/maenamkhong_bbq/",
    icon: "BUFFET",
    tag: "BBQ Buffet",
  },
  {
    id: "06",
    name: "River Khong",
    subtitle: "Te Awamutu",
    address: "104 George Street, Te Awamutu",
    phone: "022 123 6020",
    phoneNote: "BYO Wine",
    hours: "11:30 am–2 pm · 4–9 pm · Closed Mon",
    mapUrl: "https://maps.google.com/?q=104+George+Street+Te+Awamutu+3800",
    orderUrl: "https://venues.heybustle.com/NZ/river-khong",
    socialUrl: "https://www.instagram.com/river.khong/",
    icon: "LOCATION",
    tag: "Waikato",
  },
  {
    id: "07",
    name: "Mae Nam Khong",
    subtitle: "Coming Soon",
    address: "Auckland, New Zealand",
    phone: "—",
    hours: "Opening September 2026",
    icon: "LOCATION",
    tag: "New",
    comingSoon: true,
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-24 reveal-on-scroll">
          <span className="section-tag mb-4 block">Our Locations</span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary font-medium">
            Find Us
          </h2>
          <div className="h-px w-24 bg-accent mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className={`flex flex-col reveal-on-scroll reveal-delay-${(index % 3) + 1} ${branch.comingSoon ? "opacity-60" : ""}`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-primary/20 font-display text-6xl font-light">
                  {branch.id}
                </span>
                {branch.tag && (
                  <span
                    className="text-[0.65rem] font-black tracking-[0.2em] uppercase py-1.5 px-4"
                    style={branch.comingSoon
                      ? { backgroundColor: "#C9A96E", color: "#fff" }
                      : { backgroundColor: "#111111", color: "#fff" }}
                  >
                    {branch.tag}
                  </span>
                )}
              </div>

              <h3 className="font-display text-4xl text-primary mb-3 font-medium">
                {branch.name}
              </h3>

              <p className="text-secondary font-bold text-xs uppercase tracking-[0.3em]" style={{ marginBottom: branch.tagline ? "6px" : "2rem" }}>
                {branch.subtitle}
              </p>

              {branch.tagline && (
                <p className="text-secondary/60 text-xs font-light italic mb-8">
                  {branch.tagline}
                </p>
              )}

              <div className="space-y-4 mb-10 text-sm text-secondary leading-relaxed">
                {!branch.comingSoon && (
                  <p>
                    {branch.address}
                    {branch.addressNote && <span className="block opacity-60 italic text-xs mt-1">{branch.addressNote}</span>}
                  </p>
                )}
                {!branch.comingSoon && (
                  <p>
                    {branch.phone !== "—" ? branch.phone : "Contact via Socials"}
                    {branch.phoneNote && <span className="ml-2 opacity-60">({branch.phoneNote})</span>}
                  </p>
                )}
                <p className={`${branch.comingSoon ? "font-display text-2xl text-primary italic font-light" : "font-medium text-primary"}`}>
                  {branch.hours}
                </p>
                {branch.comingSoon && (
                  <p className="text-secondary/60 text-xs font-light">Details to be announced. Stay tuned.</p>
                )}
              </div>

              <div className="mt-auto pt-10 border-t border-accent/50">
                {branch.orderUrl && (
                  <a
                    href={branch.orderUrl}
                    target="_blank"
                    className="block w-full text-center py-4 px-6 mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "#C9A96E" }}
                  >
                    🛒 สั่งออนไลน์ · Order Now
                  </a>
                )}
                <div className="flex items-center gap-6">
                  {branch.websiteUrl && (
                    <a href={branch.websiteUrl} target="_blank" className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-primary hover:text-secondary transition-all">
                      Website
                    </a>
                  )}
                  {branch.mapUrl && (
                    <a href={branch.mapUrl} target="_blank" className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-primary hover:text-secondary transition-all">
                      Map / แผนที่
                    </a>
                  )}
                  {branch.socialUrl && (
                    <a href={branch.socialUrl} target="_blank" className="ml-auto group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-secondary transition-colors">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
                                                                        }
