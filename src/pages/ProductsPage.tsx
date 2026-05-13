import { useState } from "react";
import {
  ArrowRight,
  Shield,
  MessageSquare,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

/* ── Shared primitives ── */
function SectionTag({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="w-5 h-5 bg-[#FBB13A] rounded-sm flex-shrink-0" />
      <span
        className={`text-sm font-medium font-['Poppins'] uppercase leading-4 tracking-widest ${light ? "text-white" : "text-[#361B14]"}`}
      >
        {children}
      </span>
    </div>
  );
}

function OutlineButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`self-start px-8 py-4 rounded-full border border-[#361B14] inline-flex items-center gap-3 text-sm font-medium font-['Poppins'] uppercase tracking-wide text-[#361B14] hover:bg-[#361B14] hover:text-white transition-all duration-200 group ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  );
}

/* ── HERO ── */
function HeroSection() {
  return (
    <section className="relative bg-amber-100 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-[#FBB13A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-0 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-[#361B14] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight mb-6">
            Technology Built for Trusted Production
          </h1>
          <p className="text-[#361B14]/60 text-xl font-['Poppins'] leading-8">
            One platform to verify, brief, produce, and pay — built so both
            brands and artisans can work with full confidence.
          </p>
        </div>

        {/* Full-width photo banner, flush to bottom */}
        <div className="relative rounded-t-[30px] overflow-hidden aspect-video shadow-[0_-8px_60px_rgba(0,0,0,0.1)]">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Product dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#361B14]/40 to-transparent" />

          {/* Liquid-glass stat pills */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center flex-wrap gap-3 items-center">
            {[
              { v: "203+", l: "Artisans Available" },
              { v: "97%", l: "Higher Productivity" },
              { v: "3,120", l: "Projects Completed" },
            ].map(({ v, l }) => (
              <div
                key={l}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                <span className="text-[#FBB13A] text-sm font-bold font-['Poppins'] uppercase tracking-wide">
                  {v}
                </span>
                <span className="text-white/90 text-sm font-medium font-['Poppins'] uppercase tracking-wide">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PRODUCT FEATURES ── */
function ProductFeaturesSection() {
  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: image + label */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <SectionTag>Outstanding Features</SectionTag>
              <h2 className="text-4xl font-semibold font-['Poppins'] leading-tight text-[#361B14]">
                Product Features
              </h2>
            </div>
            <div className="relative rounded-[24px] overflow-hidden aspect-video shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Product features"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#361B14]/20 to-transparent" />
            </div>
          </div>

          {/* Right: stats + description */}
          <div className="flex flex-col gap-8 sm:gap-10 justify-between h-full pt-8 sm:pt-10 lg:pt-14">
            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-12 sm:gap-y-8">
              {[
                { v: "204+", l: "Active\nArtisans", icon: Users },
                { v: "97%", l: "Higher\nProductivity", icon: TrendingUp },
                { v: "3,120", l: "Projects\nCompleted", icon: CheckCircle },
              ].map(({ v, l }) => (
                <div key={v} className="flex flex-col gap-1">
                  <p className="text-[#361B14] text-3xl sm:text-4xl lg:text-6xl font-bold font-['Poppins'] leading-tight">
                    {v}
                  </p>
                  <p className="text-[#361B14]/55 text-xs sm:text-sm font-normal font-['Poppins'] leading-5 whitespace-pre-line">
                    {l}
                  </p>
                </div>
              ))}
              {/* Arrow button in 4th cell */}
              <div className="hidden sm:flex items-start pt-2">
                <button className="w-14 h-14 rounded-full border border-[#361B14]/30 flex items-center justify-center hover:border-[#FBB13A] hover:bg-[#FBB13A]/10 transition-all duration-200 group">
                  <ArrowRight className="w-5 h-5 text-[#361B14]/50 -rotate-45 group-hover:text-[#FBB13A] transition-colors duration-200" />
                </button>
              </div>
            </div>

            <p className="text-[#361B14]/70 text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-6 sm:leading-7 lg:leading-8">
              Leddar combines verification, workflow systems, escrow-backed
              payment handling, and real-time communication to help brands and
              artisans work with more confidence.
            </p>

            <OutlineButton className="w-full sm:w-auto">
              Get Started
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WHAT THE PRODUCT DOES ── */
function WhatProductDoesSection() {
  const [activeUser, setActiveUser] = useState<number | null>(null);

  const users = [
    {
      n: "1",
      title: "For Brands",
      desc: "Submit production requests, get matched with verified artisans, request pricing, and begin with samples where needed — all in one structured flow.",
    },
    {
      n: "2",
      title: "For Artisans",
      desc: "Complete verification, receive clear production briefs, manage assignments, and get paid on time with full escrow protection on every job.",
    },
    {
      n: "3",
      title: "For Admin and Operations",
      desc: "Review onboarding applications, manage verification processes, resolve disputes, and oversee all active workflows across the platform.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left card */}
          <div className="bg-white rounded-3xl p-12 flex flex-col gap-8 min-h-[640px]">
            <h2 className="text-[#361B14] text-4xl font-semibold font-['Poppins'] leading-tight">
              Leddar helps users manage the full production flow through one
              structured system.
            </h2>
            <p className="text-[#361B14]/60 text-lg font-normal font-['Poppins'] leading-8">
              Leddar simplifies production by turning complex, scattered
              processes into a single, structured flow you can track and trust.
            </p>
            <div className="mt-auto">
              <button className="h-14 px-8 bg-[#FBB13A] rounded-full inline-flex items-center gap-3 hover:bg-[#f0a520] transition-colors">
                <span className="text-[#361B14] text-sm font-semibold font-['Poppins'] uppercase tracking-wide">
                  Sign Up Now
                </span>
                <ArrowRight className="w-4 h-4 text-[#361B14]" />
              </button>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white rounded-3xl p-12 flex flex-col min-h-[640px]">
            <h3 className="text-[#361B14] text-2xl font-semibold font-['Poppins'] leading-8 mb-8">
              What the product does
            </h3>

            <div className="flex flex-col flex-1">
              {users.map(({ n, title, desc }, i) => (
                <div
                  key={n}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveUser(i)}
                  onMouseLeave={() => setActiveUser(null)}
                >
                  <div className="w-full h-px bg-gray-100" />
                  <div
                    className={`py-7 flex items-start gap-5 transition-all duration-200 ${activeUser === i ? "pl-2" : ""}`}
                  >
                    <div
                      className={`w-9 h-9 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-200
                      ${activeUser === i ? "bg-[#FBB13A] border-[#FBB13A]" : "bg-white border-gray-200"}`}
                    >
                      <span
                        className={`text-sm font-semibold font-['Poppins'] transition-colors duration-200 ${activeUser === i ? "text-white" : "text-[#361B14]/60"}`}
                      >
                        {n}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <p
                          className={`text-xl font-semibold font-['Poppins'] leading-7 transition-colors duration-200 ${activeUser === i ? "text-[#361B14]" : "text-[#361B14]/70"}`}
                        >
                          {title}
                        </p>
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200
                          ${activeUser === i ? "border-[#FBB13A] bg-[#FBB13A]/10 opacity-100" : "border-gray-200 opacity-0"}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#FBB13A]" />
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeUser === i ? "max-h-24 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-[#361B14]/55 text-sm font-normal font-['Poppins'] leading-6">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i === users.length - 1 && (
                    <div className="w-full h-px bg-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT ALL WORKS ── */
function HowItWorksSection() {
  const steps = [
    {
      icon: Shield,
      title: "Verification-first",
      desc: "Trust starts with identity, readiness, and controlled access to the platform.",
    },
    {
      icon: Zap,
      title: "Sample-first",
      desc: "Quality is easier to trust when it is validated early in the production process.",
    },
    {
      icon: Layers,
      title: "Escrow-backed Payment",
      desc: "Payments support accountability on both sides of every transaction.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "WhatsApp and dashboard updates keep production fully visible at every stage.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionTag>Our Workflow</SectionTag>
            <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight mt-5">
              <span className="text-[#361B14]">How It All </span>
              <span className="text-[#FBB13A]">Works</span>
            </h2>
          </div>
          <OutlineButton>Get a Demo</OutlineButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl overflow-hidden h-80 p-8 flex flex-col justify-between
                         bg-white hover:bg-[#FBB13A]
                         shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(251,177,58,0.25)]
                         hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Decorative orbs */}
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="p-4 bg-amber-100 group-hover:bg-white/20 rounded-full w-fit relative z-10 transition-colors duration-300">
                <Icon className="w-7 h-7 text-[#FBB13A] group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-semibold font-['Poppins'] capitalize leading-7 text-[#361B14] group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm font-normal font-['Poppins'] leading-6 text-[#361B14]/55 group-hover:text-white/75 transition-colors duration-300">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FLOW PREVIEW + TESTIMONIAL ── */
const testimonials = [
  {
    quote:
      '"Production finally feels organized. No confusion, no back-and-forth, just clear progress from start to finish."',
    name: "John Smith",
    company: "Fashion XT",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      '"For the first time I know exactly when I\'ll get paid and what the client expects. LEDDAR changed how I take on work."',
    name: "Amara Osei",
    company: "AO Leather Studio",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote:
      '"The escrow system removed all the arguments over payment. Both sides know the rules before a single stitch is made."',
    name: "Tunde Adeyemi",
    company: "Karuwa Brands",
    img: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

const flowSteps = [
  {
    label: "Submit Request",
    sub: "Brand shares design, quantity & timeline",
    indent: false,
    detail:
      "Upload your design brief, specify material requirements, set your target quantity and delivery date. Our system structures the request so artisans receive everything they need from day one — no back-and-forth to gather basics.",
    tags: ["Design Brief", "Quantity", "Timeline", "Materials"],
  },
  {
    label: "Get Verified",
    sub: "Artisan readiness confirmed",
    indent: false,
    detail:
      "Every artisan completes a structured readiness check covering identity, production capacity, equipment, and past work. Only verified artisans are matched with live requests — you never work with an unknown quantity.",
    tags: [
      "Identity Check",
      "Capacity Review",
      "Equipment Audit",
      "Work History",
    ],
  },
  {
    label: "Approve Sample",
    sub: "Quality checked before full production",
    indent: true,
    detail:
      "Before a full run begins, artisans produce a sample for your review. You can request adjustments, approve, or decline — keeping quality control in your hands before any significant materials are committed.",
    tags: [
      "Sample Review",
      "Adjustment Requests",
      "Quality Gate",
      "Pre-production",
    ],
  },
  {
    label: "Produce & Pay",
    sub: "Escrow released on delivery confirmation",
    indent: false,
    detail:
      "Funds are held in escrow from the moment you fund the order. Payment is released to the artisan only after you confirm satisfactory delivery. Both sides are protected — no ghosting, no withheld payments.",
    tags: [
      "Escrow Hold",
      "Delivery Confirmation",
      "Automatic Release",
      "Dispute Cover",
    ],
  },
];

function FlowAndTestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const prev = () =>
    setActiveTestimonial(
      (i) => (i - 1 + testimonials.length) % testimonials.length,
    );
  const next = () => setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const t = testimonials[activeTestimonial];

  return (
    <section className="bg-[#FFF7E9] py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        {/* Flow + experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: step cards */}
          <div className="flex flex-col gap-3">
            {flowSteps.map(({ label, sub, indent, detail, tags }, i) => {
              const isHovered = hoveredStep === i;
              return (
                <div
                  key={label}
                  className={`bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] px-6 cursor-pointer transition-all duration-300 ease-in-out
                    ${
                      isHovered
                        ? "shadow-[0_8px_32px_rgba(251,177,58,0.18)] -translate-y-0.5 border border-[#FBB13A]/30"
                        : "border border-transparent hover:shadow-[0_4px_24px_rgba(251,177,58,0.10)]"
                    }`}
                  style={{ marginLeft: indent ? "48px" : "0" }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Always-visible header row */}
                  <div className="py-4 flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${isHovered ? "bg-[#FBB13A]" : "bg-[#FBB13A]/15"}`}
                    >
                      <span
                        className={`text-xs font-bold font-['Poppins'] transition-colors duration-300 ${isHovered ? "text-white" : "text-[#FBB13A]"}`}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-semibold font-['Poppins'] leading-5 transition-colors duration-200 ${isHovered ? "text-[#361B14]" : "text-[#361B14]/80"}`}
                      >
                        {label}
                      </p>
                      <p
                        className={`text-xs font-['Poppins'] leading-4 mt-0.5 transition-colors duration-200 ${isHovered ? "text-[#361B14]/50" : "text-[#361B14]/35"}`}
                      >
                        {sub}
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${isHovered ? "border-[#FBB13A] bg-[#FBB13A]/10 rotate-90" : "border-neutral-200 rotate-0"}`}
                    >
                      <ArrowRight
                        className={`w-3 h-3 transition-colors duration-200 ${isHovered ? "text-[#FBB13A]" : "text-[#361B14]/30"}`}
                      />
                    </div>
                  </div>

                  {/* Expanded content — hidden until hover */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${isHovered ? "max-h-56 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                  >
                    <div className="border-t border-[#FBB13A]/15 pt-4 flex flex-col gap-3">
                      <p className="text-[#361B14]/65 text-sm font-normal font-['Poppins'] leading-6">
                        {detail}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#FBB13A]/10 text-[#361B14]/70 text-xs font-semibold font-['Poppins'] rounded-full uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: experience card */}
          <div className="relative rounded-[24px] overflow-hidden min-h-[320px] shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="The experience for you"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#361B14]/10 to-[#361B14]/80" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
              <h3 className="text-white text-3xl font-semibold font-['Poppins'] leading-9 max-w-xs">
                The experience built for you
              </h3>
              <button className="w-14 h-14 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#FBB13A] hover:border-[#FBB13A] transition-all duration-200 flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-3xl px-10 lg:px-16 py-14">
          <blockquote className="text-[#361B14] text-2xl lg:text-3xl font-medium font-['Poppins'] leading-[1.5] mb-10 max-w-4xl transition-all duration-300">
            {t.quote}
          </blockquote>

          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FBB13A]/30">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#361B14] text-lg font-semibold font-['Poppins'] leading-6">
                  {t.name}
                </p>
                <p className="text-[#361B14]/50 text-sm font-normal font-['Poppins'] leading-5">
                  {t.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Dot indicators */}
              <div className="flex gap-1.5 mr-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`rounded-full transition-all duration-200 ${i === activeTestimonial ? "w-5 h-2 bg-[#FBB13A]" : "w-2 h-2 bg-neutral-200"}`}
                  />
                ))}
              </div>
              <button
                onClick={prev}
                className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FFF7E9] hover:border-[#FBB13A]/40 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4 text-[#361B14]/60" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 bg-[#361B14] rounded-full flex items-center justify-center hover:bg-[#FBB13A] transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WHAT MAKES LEDDAR DIFFERENT ── */
function WhatMakesDifferentSection() {
  const differentiators = [
    {
      title: "Structured workflows",
      desc: "Not just connections — every project runs through a defined, accountable process.",
    },
    {
      title: "Verification-led matching",
      desc: "Artisans are validated before they ever receive a brief.",
    },
    {
      title: "Escrow-backed payments",
      desc: "Funds are protected until both sides confirm delivery.",
    },
    {
      title: "Repeatable production",
      desc: "Designed for ongoing relationships, not one-off transactions.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: white card */}
          <div className="bg-white rounded-3xl p-12 flex flex-col gap-8 min-h-[480px] justify-between">
            <div>
              <h2 className="text-[#361B14] text-4xl font-semibold font-['Poppins'] leading-tight mb-6">
                What Makes Leddar Different
              </h2>
              <p className="text-[#361B14]/65 text-lg font-normal font-['Poppins'] leading-8">
                Leddar goes beyond helping you find people. It brings structure
                to how work is managed, supports clear communication, and
                ensures payments build trust and control — for consistent,
                repeatable production.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {differentiators.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-[#FFF7E9] rounded-xl p-4 hover:bg-[#FBB13A]/10 transition-colors duration-200"
                >
                  <p className="text-[#361B14] text-sm font-semibold font-['Poppins'] mb-1">
                    {title}
                  </p>
                  <p className="text-[#361B14]/50 text-xs font-['Poppins'] leading-4">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dark card */}
          <div className="bg-[#361B14] rounded-3xl relative overflow-hidden min-h-[480px]">
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              {[
                [140, 80],
                [220, 130],
                [300, 90],
                [180, 200],
                [260, 240],
                [60, 160],
                [340, 180],
                [100, 280],
                [200, 320],
                [280, 360],
              ].map(([l, t], i) => (
                <div
                  key={i}
                  className="absolute w-14 h-14 bg-[#FBB13A] rounded-lg rotate-12"
                  style={{ left: l, top: t }}
                />
              ))}
            </div>

            <div className="relative z-10 p-12 flex flex-col gap-8 h-full min-h-[480px]">
              <h2 className="text-4xl font-semibold font-['Poppins'] leading-tight">
                <span className="text-white">Built for What Comes </span>
                <span className="text-[#FBB13A]">Next</span>
              </h2>
              <p className="text-white/65 text-lg font-normal font-['Poppins'] leading-8">
                As the platform evolves, Leddar's technology will enable more
                precise matching, deeper insights, smarter workflows, and
                support for a wider range of production categories and
                industries.
              </p>
              <div className="mt-auto">
                <button className="w-14 h-14 bg-[#FBB13A] rounded-full flex items-center justify-center hover:bg-[#f0a520] hover:scale-110 transition-all duration-200">
                  <ArrowRight className="w-6 h-6 text-[#361B14]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function WaitlistSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#FFF7E9] pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#361B14] rounded-[40px] overflow-hidden px-12 lg:px-20 py-20 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FBB13A]/8 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FBB13A]/5 rounded-full blur-[80px]" />
            <svg
              className="absolute inset-0 w-full h-full opacity-5"
              viewBox="0 0 1280 550"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0,280 C350,80 800,480 1280,220"
                stroke="#FBB13A"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M0,340 C450,140 900,540 1280,280"
                stroke="#FBB13A"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg">
            <SectionTag light>The Goal Is Simple</SectionTag>

            <div className="mt-8 mb-6 flex flex-col gap-5">
              <h2 className="text-3xl sm:text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
                <span className="text-white">Make Production Easier to </span>
                <span className="text-[#FBB13A]">Trust.</span>
              </h2>
              <p className="text-stone-400 text-lg font-normal font-['Poppins'] leading-8">
                We're opening access in phases to keep onboarding high quality
                for both brands and artisans.
              </p>
            </div>

            <div className="flex items-center rounded-full overflow-hidden border border-white/10 bg-stone-800 pr-1 pl-6 h-14">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent text-white/60 text-sm font-['Poppins'] placeholder-white/40 focus:outline-none flex-1 min-w-0"
              />
              <button className="h-10 px-6 bg-[#FBB13A] rounded-full flex items-center gap-2 hover:bg-[#f0a520] transition-colors shrink-0">
                <span className="text-[#361B14] text-sm font-semibold font-['Poppins'] uppercase tracking-wide whitespace-nowrap">
                  Join the Waitlist
                </span>
                <ArrowRight className="w-4 h-4 text-[#361B14]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main>
      <HeroSection />
      <ProductFeaturesSection />
      <WhatProductDoesSection />
      <HowItWorksSection />
      <FlowAndTestimonialSection />
      <WhatMakesDifferentSection />
      <WaitlistSection />
    </main>
  );
}
