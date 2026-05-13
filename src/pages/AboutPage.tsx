import { useState } from "react";
import {
  ArrowRight,
  Shield,
  MessageSquare,
  Layers,
  Zap,
  CheckCircle,
  TrendingUp,
  X,
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 relative z-10">
        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-[#361B14] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight mb-6">
            Building the Trust Layer for Production
          </h1>
          <p className="text-[#361B14]/60 text-sm sm:text-base md:text-lg lg:text-xl font-['Poppins'] leading-7 sm:leading-8">
            We're creating the infrastructure that makes artisan production
            reliable, transparent, and scalable — for brands and craftspeople
            alike.
          </p>
        </div>

        {/* Photo banner */}
        <div className="relative max-w-4xl mx-auto rounded-[30px] overflow-hidden aspect-video shadow-[0_8px_60px_rgba(0,0,0,0.12)]">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#361B14]/50 to-transparent" />

          {/* Aligned liquid-glass stat pills — bottom-left row */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-3 items-center">
            {[
              { v: "203+", l: "Artisans Available" },
              { v: "97%", l: "Higher Productivity" },
              { v: "78%", l: "Job Success Rate" },
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

/* ── OUR STORY ── */
function OurStorySection() {
  const problems = [
    {
      img: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Brands struggle to find reliable production partners.",
    },
    {
      img: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Artisans struggle to access serious, repeatable work.",
    },
    {
      img: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "The market has skill. The market has demand. What it lacks is structure.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
          <SectionTag>Leddar Story</SectionTag>
          <h2 className="text-[#361B14] text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
            Our Story
          </h2>
          <p className="text-[#361B14]/55 text-xl font-normal font-['Poppins'] leading-8 max-w-2xl">
            Production in leather and other artisan-led industries is still too
            dependent on referrals, scattered chats, and personal trust.
          </p>
        </div>

        {/* Problem cards — horizontal, expand-on-hover */}
        <div className="relative max-w-4xl mx-auto flex flex-col lg:flex-row gap-4 items-stretch">
          {problems.map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] cursor-pointer
                         flex-1 lg:flex-[1] lg:hover:flex-[1.6]
                         transition-all duration-500 ease-in-out
                         min-h-[320px] lg:min-h-[400px]"
              style={{ minWidth: 0 }}
            >
              <img
                src={card.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#361B14]/85" />

              {/* Text — always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <p className="text-white text-base font-normal font-['Poppins'] leading-6 flex-1">
                  {card.text}
                </p>

                {/* Arrow button — hidden by default, slides in on hover */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FBB13A] flex items-center justify-center
                                opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                                transition-all duration-300 ease-out"
                >
                  <ArrowRight className="w-4 h-4 text-[#361B14]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement — no fill, border only, hover turns arrow orange */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl p-6 border border-neutral-200 hover:border-[#FBB13A]/50 transition-colors duration-300 cursor-pointer">
            <div className="w-12 h-12 rounded-full border-2 border-[#361B14] group-hover:border-[#FBB13A] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              <ArrowRight className="w-5 h-5 text-[#361B14] group-hover:text-[#FBB13A] transition-colors duration-300" />
            </div>
            <p className="text-[#361B14] text-3xl font-semibold font-['Poppins'] leading-tight">
              Leddar was built to close that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WHAT LEDDAR IS / IS NOT ── */
const whatItIs = {
  label: "What Leddar Is",
  tagline:
    "Leddar is a trust-led production platform that helps brands and artisans work together with clarity, security, and accountability at every step.",
  img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
};

const whatItIsNot = {
  label: "What Leddar Is Not",
  tagline:
    "LEDDAR is often mistaken for things that already exist. But we're not replicating broken systems — we're replacing them.",
  img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=900",
};

const isFeatures = [
  {
    icon: Shield,
    title: "Verification and readiness checks",
    desc: "Every artisan is vetted for skill, reliability, and production capacity before being matched with clients.",
  },
  {
    icon: Layers,
    title: "Structured requests and workflows",
    desc: "Clear production briefs, timelines, and deliverables so both sides know exactly what to expect.",
  },
  {
    icon: CheckCircle,
    title: "Sample-first production where needed",
    desc: "For larger orders, a sample-approval step protects quality before full production begins.",
  },
  {
    icon: Zap,
    title: "Escrow-backed payment flow",
    desc: "Funds are held securely until work is completed and approved — protecting both brands and artisans.",
  },
  {
    icon: MessageSquare,
    title: "Real-time production updates",
    desc: "Clients receive WhatsApp and dashboard updates throughout every stage of production.",
  },
  {
    icon: TrendingUp,
    title: "Reputation and review system",
    desc: "Ratings and performance history help both sides build track records that unlock better opportunities.",
  },
];

const isNotFeatures = [
  {
    icon: X,
    title: "Not a freelance marketplace",
    desc: "We don't list random gig workers. Every artisan on LEDDAR is verified, briefed, and production-ready.",
  },
  {
    icon: X,
    title: "Not a directory or referral list",
    desc: "We're not just connecting people — we're structuring the entire workflow from brief to delivery.",
  },
  {
    icon: X,
    title: "Not a chat-based coordination tool",
    desc: "We replace scattered WhatsApp threads with structured, accountable production management.",
  },
  {
    icon: X,
    title: "Not escrow only",
    desc: "Payment protection is one layer. LEDDAR also handles verification, briefs, updates, and reviews.",
  },
  {
    icon: X,
    title: "Not a platform that takes and disappears",
    desc: "We stay with every project — from first brief to final delivery and payment release.",
  },
  {
    icon: X,
    title: "Not built for the informal economy",
    desc: "LEDDAR formalizes artisan work with standards, contracts, and accountability on both sides.",
  },
];

function WhatLeddarIsSection() {
  const [mode, setMode] = useState<"is" | "isnot">("is");

  const content = mode === "is" ? whatItIs : whatItIsNot;
  const features = mode === "is" ? isFeatures : isNotFeatures;
  const isNot = mode === "isnot";

  return (
    <section className="bg-amber-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left card */}
          <div className="bg-white rounded-3xl overflow-hidden p-6 sm:p-10 flex flex-col gap-6 sm:gap-8 h-full relative">
            {/* Toggle button — stacked on mobile, top right on larger screens */}
            <button
              onClick={() => setMode(mode === "is" ? "isnot" : "is")}
              className={`relative sm:absolute sm:top-8 sm:right-8 self-start sm:self-auto px-4 py-2 rounded-full text-xs font-semibold font-['Poppins'] uppercase tracking-widest border transition-all duration-200
                ${
                  isNot
                    ? "bg-[#361B14] text-white border-[#361B14] hover:bg-[#4a2a20]"
                    : "bg-white text-[#361B14] border-[#361B14]/25 hover:border-[#361B14]"
                }`}
            >
              {isNot ? "← What Leddar Is" : "What Leddar Is Not →"}
            </button>

            <div className="pr-0 sm:pr-8 lg:pr-36">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-['Poppins'] capitalize leading-tight mb-5 transition-all duration-300">
                {isNot ? (
                  <>
                    <span className="text-[#361B14]">What </span>
                    <span className="text-[#FBB13A]">Leddar </span>
                    <span className="text-[#361B14]">Is Not</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#361B14]">What </span>
                    <span className="text-[#FBB13A]">Leddar </span>
                    <span className="text-[#361B14]">Is</span>
                  </>
                )}
              </h2>
              <p className="text-[#361B14]/70 text-base sm:text-lg font-normal font-['Poppins'] leading-7 sm:leading-8">
                {content.tagline}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video transition-all duration-500">
              <img
                key={content.img}
                src={content.img}
                alt={content.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#361B14]/30 to-transparent" />
            </div>

            <OutlineButton>Learn More</OutlineButton>
          </div>

          {/* Right card — fixed height with scroll */}
          <div
            className="bg-white rounded-3xl p-10 flex flex-col gap-6"
            style={{ maxHeight: "560px" }}
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-[#FBB13A]/15 rounded-full flex items-center justify-center mb-4">
                {isNot ? (
                  <X className="w-5 h-5 text-[#FBB13A]" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-[#FBB13A]" />
                )}
              </div>
              <h3 className="text-[#361B14] text-2xl font-semibold font-['Poppins'] leading-8">
                {isNot ? "Here's what it isn't" : "Here's what it offers"}
              </h3>
            </div>

            {/* Scrollable feature list */}
            <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-transparent">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-5 flex items-start gap-4 flex-shrink-0 ${isNot ? "bg-[#361B14]/5" : "bg-[#FFF7E9]"}`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isNot ? "bg-[#361B14]/10" : "bg-[#FBB13A]/15"}`}
                  >
                    <f.icon
                      className={`w-4 h-4 ${isNot ? "text-[#361B14]/50" : "text-[#FBB13A]"}`}
                    />
                  </div>
                  <div>
                    <p className="text-[#361B14] text-sm font-semibold font-['Poppins'] leading-5 mb-1">
                      {f.title}
                    </p>
                    <p className="text-[#361B14]/55 text-sm font-normal font-['Poppins'] leading-5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW WE WORK ── */
function HowWeWorkSection() {
  const steps = [
    {
      icon: Shield,
      title: "Verification-first",
      desc: "Trust starts with identity, readiness, and controlled access.",
    },
    {
      icon: Zap,
      title: "Sample-first",
      desc: "Quality is easier to trust when it is validated early in the process.",
    },
    {
      icon: Layers,
      title: "Escrow-backed Payment",
      desc: "Payments support accountability on both sides of every transaction.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "WhatsApp and dashboard updates keep production fully visible.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionTag>Our Process</SectionTag>
            <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight mt-5">
              <span className="text-[#361B14]">How We </span>
              <span className="text-[#FBB13A]">Work</span>
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
              {/* Decorative orbs — revealed on hover */}
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

/* ── MILESTONES ── */
function MilestonesSection() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: "Phase 1",
      title: "Establish Trust in Leather",
      points: [
        "Verified artisans onboarded",
        "Secure escrow payments live",
        "Structured service delivery",
      ],
      goal: "Make leather production reliable, transparent, and scalable.",
    },
    {
      phase: "Phase 2",
      title: "Expand Across Artisan Categories",
      points: [
        "Textiles and ceramics added",
        "Woodwork and metalwork included",
        "Cross-category matching engine",
      ],
      goal: "Serve every skilled trade with the same structure and trust.",
    },
    {
      phase: "Phase 3",
      title: "Power the Artisan Economy",
      points: [
        "Consistent opportunities for workers",
        "Confident sourcing for clients",
        "Industry-wide transparency",
      ],
      goal: "Evolve beyond a platform into production infrastructure.",
    },
    {
      phase: "Phase 4",
      title: "Standardizing Skilled Work at Scale",
      points: [
        "Unified discovery system",
        "Standardized delivery & payment",
        "Cross-region, cross-market reach",
      ],
      goal: "Create the definitive standard for how artisan work is done.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <SectionTag>Milestones</SectionTag>
          <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight mt-5">
            <span className="text-[#361B14]">Where We Are </span>
            <span className="text-[#FBB13A]">Going</span>
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Dots + line row */}
          <div className="relative mb-4">
            {/* Base grey line */}
            <div className="absolute left-0 right-0 top-[18px] h-[2px] bg-neutral-200" />
            {/* Animated orange fill — shifts right on hover */}
            <div
              className="absolute left-0 top-[18px] h-[2px] bg-[#FBB13A] transition-all duration-500 ease-in-out"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            />

            <div className="grid grid-cols-4 gap-8">
              {phases.map(({ phase }, i) => {
                const isActive = i <= activePhase;
                return (
                  <div
                    key={phase}
                    className="flex items-center gap-3 cursor-pointer"
                    onMouseEnter={() => setActivePhase(i)}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center border-2 relative z-10 transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#FBB13A] border-[#FBB13A] shadow-[0_0_0_4px_rgba(251,177,58,0.2)]"
                            : "bg-white border-neutral-200"
                        }`}
                    >
                      {isActive && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold font-['Poppins'] uppercase tracking-widest transition-colors duration-300
                        ${isActive ? "text-[#FBB13A]" : "text-[#361B14]/30"}`}
                    >
                      {phase}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards — Phase 1 content slightly lower */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            {phases.map(({ phase, title, points, goal }, i) => {
              const isActive = i <= activePhase;
              return (
                <div
                  key={phase}
                  className={`rounded-2xl p-6 border flex flex-col gap-5 transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-white border-[#FBB13A]/40 shadow-[0_4px_24px_rgba(251,177,58,0.12)]"
                        : "bg-white/60 border-neutral-100"
                    }
                    ${i === 0 ? "mt-4" : ""}
                  `}
                  onMouseEnter={() => setActivePhase(i)}
                >
                  <p
                    className={`text-lg font-semibold font-['Poppins'] leading-6 transition-colors duration-300 ${isActive ? "text-[#361B14]" : "text-[#361B14]/50"}`}
                  >
                    {title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${isActive ? "bg-[#FBB13A]" : "bg-neutral-300"}`}
                        />
                        <span
                          className={`text-sm font-['Poppins'] leading-5 transition-colors duration-300 ${isActive ? "text-[#361B14]/75" : "text-[#361B14]/35"}`}
                        >
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className={`text-xs font-['Poppins'] leading-4 italic border-t pt-4 transition-colors duration-300 ${isActive ? "text-[#361B14]/50 border-[#FBB13A]/20" : "text-[#361B14]/25 border-neutral-100"}`}
                  >
                    {goal}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile list */}
        <div className="flex flex-col gap-6 lg:hidden">
          {phases.map(({ phase, title, points, goal }, i) => (
            <div
              key={phase}
              className={`rounded-2xl p-6 border flex flex-col gap-4 ${i === 0 ? "bg-white border-[#FBB13A]/40" : "bg-white/60 border-neutral-100"}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center ${i === 0 ? "bg-[#FBB13A]" : "bg-neutral-100"}`}
                >
                  {i === 0 && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  )}
                </div>
                <span
                  className={`text-xs font-bold font-['Poppins'] uppercase tracking-widest ${i === 0 ? "text-[#FBB13A]" : "text-[#361B14]/40"}`}
                >
                  {phase}
                </span>
              </div>
              <p
                className={`text-lg font-semibold font-['Poppins'] ${i === 0 ? "text-[#361B14]" : "text-[#361B14]/55"}`}
              >
                {title}
              </p>
              <div className="flex flex-col gap-2">
                {points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${i === 0 ? "bg-[#FBB13A]" : "bg-neutral-200"}`}
                    />
                    <span
                      className={`text-sm font-['Poppins'] ${i === 0 ? "text-[#361B14]/70" : "text-[#361B14]/40"}`}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className={`text-xs font-['Poppins'] italic border-t pt-3 ${i === 0 ? "text-[#361B14]/50 border-neutral-200" : "text-[#361B14]/30 border-neutral-100"}`}
              >
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA / WAITLIST ── */
function WaitlistSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#FFF7E9] pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#361B14] rounded-[32px] sm:rounded-[40px] overflow-hidden px-5 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
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
            <SectionTag light>Let's get started</SectionTag>

            <div className="mt-6 sm:mt-8 mb-6 flex flex-col gap-4 sm:gap-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
                <span className="text-white">Production, You Can Finally </span>
                <span className="text-[#FBB13A]">Trust.</span>
              </h2>
              <p className="text-stone-400 text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-6 sm:leading-7 lg:leading-8">
                We're opening access in phases to keep onboarding high quality
                for both brands and artisans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center rounded-3xl sm:rounded-full overflow-hidden border border-white/10 bg-stone-800 p-2 sm:pr-1 sm:pl-6 gap-2 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent text-white/60 text-sm font-['Poppins'] placeholder-white/40 focus:outline-none flex-1 min-w-0 px-3 py-3 sm:px-0 sm:py-0"
              />
              <button className="h-11 sm:h-10 px-5 sm:px-6 bg-[#FBB13A] rounded-full flex items-center justify-center gap-2 hover:bg-[#f0a520] transition-colors shrink-0 w-full sm:w-auto">
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

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <OurStorySection />
      <WhatLeddarIsSection />
      <HowWeWorkSection />
      <MilestonesSection />
      <WaitlistSection />
    </main>
  );
}
