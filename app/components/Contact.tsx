"use client";

import { useState } from "react";

const branchOptions = [
  "New Lynn (Todd Plaza)",
  "Street Feast — Titirangi Village",
  "Onzon de Thai Kitchen — Herne Bay",
  "Mae Nam Khong Thai Kitchen — St Johns",
  "Mae Nam Khong BBQ Buffet — New Lynn",
  "River Khong — Te Awamutu",
];

const subjectOptions = [
  "General Enquiry",
  "Table Reservation",
  "Functions & Group Bookings",
  "Online Order",
  "Complaints & Feedback",
  "Job Application / Careers",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  branch: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    branch: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const FORMSPREE_ID = "xrevyrgy";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-24 reveal-on-scroll">
          <span className="section-tag mb-4 block text-center">Inquiries</span>
          <h2 className="font-display text-5xl lg:text-6xl text-primary text-center italic">
            Connect With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center text-center p-12 bg-cream border border-accent">
                <h3 className="font-display text-3xl text-primary mb-4 italic">Thank You</h3>
                <p className="text-secondary font-light">Your message has been received. We will be in touch shortly.</p>
                <button className="btn-minimal mt-12 mx-auto" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 reveal-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" name="name" placeholder="Name" required className="input-minimal" onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email" required className="input-minimal" onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="tel" name="phone" placeholder="Phone" className="input-minimal" onChange={handleChange} />
                  <select name="branch" className="input-minimal" onChange={handleChange}>
                    <option value="">Select Branch</option>
                    {branchOptions.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <select name="subject" className="input-minimal" value={form.subject} onChange={handleChange}>
                  {subjectOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea name="message" rows={5} placeholder="Message" required className="input-minimal" onChange={handleChange}></textarea>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="btn-minimal w-full">
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-16 reveal-on-scroll reveal-delay-2">
            <div className="aspect-video grayscale border border-accent overflow-hidden">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=2-4+Todd+Plaza+New+Lynn&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-primary/10 pt-12">
              <div>
                <h4 className="text-[0.65rem] uppercase tracking-[0.3em] font-black text-secondary mb-4">Inquiries</h4>
                <p className="text-primary font-bold text-lg">info.maenamkhong@gmail.com</p>
                <p className="text-primary font-bold text-lg">(09) 826 4002</p>
              </div>
              <div>
                <h4 className="text-[0.65rem] uppercase tracking-[0.3em] font-black text-secondary mb-4">Hours</h4>
                <p className="text-primary font-bold">12–3 pm · 4:30–9 pm</p>
                <p className="text-primary font-bold">Fri–Sat until 9:30 pm</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Adding internal CSS for input-minimal as it is shared here */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <style>{`
        .input-minimal {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid #E5E0D8;
          padding: 12px 0;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
          color: #1A1A1A;
          border-radius: 0;
          -webkit-appearance: none;
        }
        .input-minimal:focus {
          border-color: #1A1A1A;
        }
        .input-minimal::placeholder {
          color: #A89F91;
          font-weight: 300;
        }
      `}</style>
    </section>
  );
}
