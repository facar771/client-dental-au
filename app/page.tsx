"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "about", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "General Dentistry",
      desc: "Comprehensive check-ups, cleans, fillings, and preventive care to keep your smile healthy for life.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: "Teeth Whitening",
      desc: "Professional in-chair and take-home whitening treatments for a brighter, more confident smile.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      title: "Orthodontics",
      desc: "Invisible aligners and traditional braces tailored to straighten your teeth comfortably and discreetly.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      ),
      title: "Cosmetic Dentistry",
      desc: "Veneers, crowns, and smile makeovers designed to give you the beautiful, natural-looking smile you deserve.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "Dental Implants",
      desc: "Permanent tooth replacement solutions that look, feel, and function just like your natural teeth.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      title: "Emergency Care",
      desc: "Same-day appointments for dental emergencies — because pain doesn't wait, and neither should you.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Principal Dentist",
      bio: "Over 15 years of experience in general and cosmetic dentistry. Passionate about creating anxiety-free experiences for every patient.",
      initials: "SM",
    },
    {
      name: "Dr. James Nguyen",
      role: "Orthodontist",
      bio: "Specialist in invisible aligners and complex orthodontic cases. Dedicated to crafting perfectly aligned smiles for patients of all ages.",
      initials: "JN",
    },
    {
      name: "Dr. Emily Patel",
      role: "Oral Surgeon",
      bio: "Expert in dental implants and oral surgery with a gentle, patient-first approach. Your comfort is always her top priority.",
      initials: "EP",
    },
  ];

  return (
    <main className="bg-[#FAFAF8] text-[#1C2B2B] font-body overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#2D6A5A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2C8 2 5 5 5 8c0 4 3 6 4 9h6c1-3 4-5 4-9 0-3-3-6-7-6z" fill="white" fillOpacity="0.9" />
                <path d="M9 17c0 2.5 1.5 4 3 4s3-1.5 3-4" stroke="white" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-[#1C2B2B]">
              Bright<span className="text-[#2D6A5A]">Smile</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative ${
                  activeSection === link.id ? "text-[#2D6A5A]" : "text-[#4A5568] hover:text-[#2D6A5A]"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2D6A5A] rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#2D6A5A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#245a4b] transition-colors duration-200 shadow-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-5 h-0.5 bg-[#1C2B2B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1C2B2B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1C2B2B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white px-6 pb-6 pt-4 flex flex-col gap-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm font-medium text-[#4A5568] hover:text-[#2D6A5A] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#2D6A5A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#245a4b] transition-colors w-fit"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #EDF5F2 0%, #F5F0E8 50%, #EDF5F2 100%)",
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#2D6A5A]/8 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C8A96E]/10 blur-3xl" />
          <svg className="absolute top-1/4 right-0 opacity-5 w-96 h-96" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#2D6A5A" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#2D6A5A" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#2D6A5A" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2D6A5A]/20 rounded-full px-4 py-2 text-sm text-[#2D6A5A] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2D6A5A] animate-pulse" />
              Now Accepting New Patients · Sydney, NSW
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[1.1] text-[#1C2B2B]">
              Your Family's{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#2D6A5A]">Trusted Smile</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9 Q75 2 150 9 Q225 16 298 9" stroke="#C8A96E" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Partners
            </h1>

            <p className="text-lg text-[#4A6358] leading-relaxed max-w-md">
              Gentle, modern dental care for every stage of life. From routine check-ups to smile transformations — we make every visit something to look forward to.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-[#2D6A5A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#245a4b] transition-all duration-200 shadow-lg shadow-[#2D6A5A]/20 hover:shadow-xl hover:shadow-[#2D6A5A]/25 hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 text-[#2D6A5A] font-semibold px-6 py-4 rounded-full border-2 border-[#2D6A5A]/30 hover:border-[#2D6A5A] transition-all duration-200"
              >
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-8 pt-2">
              {[["2,400+", "Happy Patients"], ["15+", "Years Experience"], ["4.9★", "Google Rating"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="font-display text-2xl font-bold text-[#1C2B2B]">{val}</div>
                  <div className="text-xs text-[#6B8A7A] font-medium mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2D6A5A]/20 animate-[spin_20s_linear_infinite]" />
              {/* Main circle */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#2D6A5A] to-[#1a4a3c] flex items-center justify-center shadow-2xl shadow-[#2D6A5A]/30">
                <svg viewBox="0 0 120 120" className="w-40 h-40" fill="none">
                  <path d="M60 20C42 20 28 34 28 50c0 18 12 28 16 42h32c4-14 16-24 16-42 0-16-14-30-32-30z" fill="white" fillOpacity="0.15" />
                  <path d="M60 20C42 20 28 34 28 50c0 18 12 28 16 42h32c4-14 16-24 16-42 0-16-14-30-32-30z" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M44 92c0 10 7 18 16 18s16-8 16-18" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <line x1="60" y1="50" x2="60" y2="70" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M52 55 L60 50 L68 55" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-[float_3s_ease-in-out_infinite]">
                <div className="w-10 h-10 rounded-full bg-[#EDF5F2] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2D6A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C2B2B]">Pain-Free</div>
                  <div className="text-xs text-[#6B8A7A]">Guaranteed</div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-[float_3s_ease-in-out_infinite_1.5s]">
                <div className="w-10 h-10 rounded-full bg-[#FDF8EE] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C8A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C2B2B]">Same-Day</div>
                  <div className="text-xs text-[#6B8A7A]">Appointments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-[#2D6A5A] uppercase">What We Offer</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C2B2B] mt-3 mb-5">
              Comprehensive Dental Care
            </h2>
            <p className="text-[#4A6358] max-w-xl mx-auto leading-relaxed">
              From your first check-up to complete smile transformations, we offer a full range of dental services with the latest technology and a gentle touch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group p-8 rounded-3xl border border-gray-100 hover:border-[#2D6A5A]/20 hover:shadow-xl hover:shadow-[#2D6A5A]/5 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EDF5F2] flex items-center justify-center text-[#2D6A5A] mb-5 group-hover:bg-[#2D6A5A] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#1C2B2B] mb-3">{service.title}</h3>
                <p className="text-sm text-[#5A7A6A] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-gradient-to-r from-[#2D6A5A] to-[#1a4a3c] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Health Fund Accepted</h3>
              <p className="text-[#a8cdc0] text-sm">We accept all major health funds including Medibank, Bupa, HCF, NIB, and more.</p>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="flex-shrink-0 bg-white text-[#2D6A5A] font-semibold px-8 py-4 rounded-full hover:bg-[#EDF5F2] transition-colors duration-200 whitespace-nowrap"
            >
              Check Your Cover
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <div className="space-y-6">
              <span className="text-sm font-semibold tracking-widest text-[#2D6A5A] uppercase">About Us</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C2B2B] leading-tight">
                A Clinic That Feels Like Home
              </h2>
              <p className="text-[#4A6358] leading-relaxed">
                BrightSmile Dental was founded with one simple belief: everyone deserves exceptional dental care in a warm, welcoming environment. We're a locally owned family practice serving the Sydney community since 2009.
              </p>
              <p className="text-[#4A6358] leading-relaxed">
                We understand that visiting the dentist can feel daunting. That's why we've created a practice built on compassion, clear communication, and the very latest in gentle dentistry techniques. Whether you're five or eighty-five, we'll make sure you feel at ease from the moment you walk through our door.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  ["✓", "No Gap Check-ups"],
                  ["✓", "Child-Friendly Clinic"],
                  ["✓", "HICAPS On-Site"],
                  ["✓", "Flexible Payment Plans"],
                  ["✓", "Evening Appointments"],
                  ["✓", "Accessible Facilities"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-[#2D6A5A] font-medium">
                    <span className="text-[#C8A96E] font-bold">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#EDF5F2] to-[#E8F0EC] rounded-3xl p-10 space-y-6">
                {[
                  { n: "2,400+", l: "Patients Treated" },
                  { n: "15+", l: "Years in Practice" },
                  { n: "98%", l: "Patient Satisfaction" },
                  { n: "3", l: "Specialist Dentists" },
                ].map(({ n, l }) => (
                  <div key={l} className="flex items-center justify-between border-b border-[#2D6A5A]/10 pb-6 last:border-0 last:pb-0">
                    <span className="text-[#6B8A7A] font-medium">{l}</span>
                    <span className="font-display text-3xl font-bold text-[#2D6A5A]">{n}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#C8A96E]/15 blur-2xl" />
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-display text-3xl font-bold text-[#1C2B2B] text-center mb-12">Meet Our Team</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2D6A5A] to-[#1a4a3c] flex items-center justify-center mx-auto mb-5 text-white font-display text-2xl font-bold group-hover:shadow-xl group-hover:shadow-[#2D6A5A]/25 transition-all duration-300 group-hover:-translate-y-1">
                    {member.initials}
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#1C2B2B] mb-1">{member.name}</h4>
                  <span className="text-xs font-semibold text-[#2D6A5A] uppercase tracking-wider">{member.role}</span>
                  <p className="text-sm text-[#5A7A6A] leading-relaxed mt-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-[#2D6A5A] uppercase">Get In Touch</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1C2B2B] mt-3 mb-5">
              Book Your Appointment
            </h2>
            <p className="text-[#4A6358] max-w-xl mx-auto">
              Ready to take the first step toward your best smile? Contact us today and we'll find a time that works for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Our Location",
                  lines: ["Level 1, 82 Crown Street", "Surry Hills NSW 2010"],
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  lines: ["(02) 9380 1234"],
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  lines: ["hello@brightsmile.com.au"],
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Opening Hours",
                  lines: ["Mon – Fri: 8:00am – 6:00pm", "Saturday: 9:00am – 2:00pm", "Sunday: Closed"],
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF5F2] flex items-center justify-center text-[#2D6A5A] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C2B2B] text-sm mb-1">{item.title}</div>
                    {item.lines.map((l) => (
                      <div key={l} className="text-sm text-[#5A7A6A]">{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4 py-16">
                    <div className="w-16 h-16 rounded-full bg-[#EDF5F2] flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-[#2D6A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1C2B2B]">We'll be in touch soon!</h3>
                    <p className="text-[#4A6358] max-w-sm mx-auto">Thanks for reaching out. Our team will contact you within one business day to confirm your appointment.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-[#2D6A5A] font-medium underline underline-offset-2 mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-[#FAFAF8] rounded-3xl p-8 border border-gray-100">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1C2B2B] mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1C2B2B] text-sm focus:outline-none focus:border-[#2D6A5A] focus:ring-2 focus:ring-[#2D6A5A]/10 transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C2B2B] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1C2B2B] text-sm focus:outline-none focus:border-[#2D6A5A] focus:ring-2 focus:ring-[#2D6A5A]/10 transition-all"
                        placeholder="0412 345 678"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C2B2B] mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1C2B2B] text-sm focus:outline-none focus:border-[#2D6A5A] focus:ring-2 focus:ring-[#2D6A5A]/10 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C2B2B] mb-2">How can we help?</label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1C2B2B] text-sm focus:outline-none focus:border-[#2D6A5A] focus:ring-2 focus:ring-[#2D6A5A]/10 transition-all resize-none"
                      placeholder="Tell us about the treatment you're interested in, or any concerns you have..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2D6A5A] text-white font-semibold py-4 rounded-xl hover:bg-[#245a4b] transition-colors duration-200 shadow-lg shadow-[#2D6A5A]/20 hover:shadow-xl"
                  >
                    Request Appointment
                  </button>
                  <p className="text-xs text-[#8A9A9A] text-center">
                    We'll respond within one business day. For urgent matters, please call us directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C2B2B] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2D6A5A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 2C8 2 5 5 5 8c0 4 3 6 4 9h6c1-3 4-5 4-9 0-3-3-6-7-6z" fill="white" fillOpacity="0.9" />
                  <path d="M9 17c0 2.5 1.5 4 3 4s3-1.5 3-4" stroke="white" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold">
                Bright<span className="text-[#4CAF7D]">Smile</span> Dental
              </span>
            </div>
            <div className="flex gap-6 text-sm text-[#6B9A8A]">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-white transition-colors">
                  {link.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#4A6A5A]">
              © 2025 BrightSmile Dental. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'DM Serif Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </main>
  );
}
