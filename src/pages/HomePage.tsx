import { useState } from "react";
import {
  ArrowRight,
  Shield,
  MessageSquare,
  Layers,
  ChevronDown,
  ChevronUp,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

/* ── Shared primitives ── */
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="w-5 h-5 bg-[#FBB13A] rounded-sm flex-shrink-0" />
      <span className="text-[#361B14] text-sm font-medium font-['Poppins'] uppercase leading-4 tracking-widest">
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
  const [email, setEmail] = useState("");

  return (
    <section className="relative bg-amber-100 overflow-hidden">
      {/* Subtle background orb (hidden on small screens) */}
      <div className="absolute bottom-0 right-0 hidden md:block w-[700px] h-[500px] bg-[#FBB13A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-20 relative z-10">
        {/* Headline */}
        <div className="flex flex-col items-center text-center gap-0 mb-10">
          <h1 className="text-[#361B14] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold font-['Poppins'] capitalize leading-tight">
            Hiring <span className="text-[#FBB13A]">Artisans</span>
          </h1>
          <h1 className="text-[#361B14] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold font-['Poppins'] capitalize leading-tight">
            Shouldn't Feel Like
          </h1>
          <h1 className="text-[#361B14] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold font-['Poppins'] capitalize leading-tight">
            a Gamble
          </h1>
          <p className="mt-6 max-w-xl text-[#361B14]/60 text-base sm:text-lg font-normal font-['Poppins'] leading-8">
            LEDDAR connects brands with verified artisans through a transparent,
            escrow-backed production platform.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-16">
          <div className="w-full max-w-md sm:max-w-lg flex items-center rounded-full border border-[#361B14]/20 bg-white/70 backdrop-blur-sm overflow-hidden pr-1 pl-6 h-14">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="bg-transparent text-[#361B14] text-sm font-['Poppins'] placeholder-[#361B14]/40 focus:outline-none flex-1 min-w-0"
            />
            <button className="h-10 px-6 bg-[#FBB13A] rounded-full flex items-center gap-2 hover:bg-[#f0a520] transition-colors ml-1 shrink-0">
              <span className="text-[#361B14] text-sm font-semibold font-['Poppins'] uppercase tracking-wide whitespace-nowrap">
                Sign Up Now
              </span>
              <ArrowRight className="w-4 h-4 text-[#361B14]" />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          {[
            { value: "203+", label: "Artisans Available" },
            { value: "97%", label: "Higher Productivity" },
            { value: "78%", label: "Job Success Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="px-4 py-1.5 bg-[#FFF7E9] rounded-full">
                <span className="text-[#361B14] text-sm font-semibold font-['Poppins'] uppercase tracking-wider">
                  {value}
                </span>
              </div>
              <span className="text-[#361B14]/70 text-sm font-medium font-['Poppins'] uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── BETTER WAY SECTION ── */
function BetterWaySection() {
  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-[40px]" />
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-[#FBB13A]/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#FBB13A]" />
              </div>
              <div>
                <p className="text-[#361B14] text-sm font-semibold font-['Poppins']">
                  Verified Artisans
                </p>
                <p className="text-[#361B14]/50 text-xs font-['Poppins']">
                  203+ active professionals
                </p>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-8">
            <SectionTag>More Simpler</SectionTag>

            <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
              <span className="text-[#361B14]">A </span>
              <span className="text-[#FBB13A]">Better</span>
              <span className="text-[#361B14]">
                {" "}
                Way to Connect, Work & Get Paid
              </span>
            </h2>

            <div className="flex flex-col gap-4">
              {[
                "Get matched with verified brands",
                "Receive clear production requests",
                "Get paid for work done",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-7 h-7 bg-[#FBB13A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold font-['Poppins']">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-[#361B14]/70 text-lg font-normal font-['Poppins'] leading-7">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <OutlineButton>Artisans Sign Up</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ESCROW PAYMENTS SECTION ── */
function EscrowSection() {
  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: content */}
          <div className="flex flex-col gap-8">
            <SectionTag>We Integrated</SectionTag>

            <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
              <span className="text-[#FBB13A]">Secure</span>
              <span className="text-[#361B14]"> Escrow Payments</span>
            </h2>

            <p className="text-[#361B14]/60 text-xl font-normal font-['Poppins'] leading-8">
              Payments are held safely in escrow and only released when work is
              completed and approved — giving both sides full confidence.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Funds held securely",
                  sub: "Until delivery confirmed",
                },
                { label: "Zero payment risk", sub: "For both parties" },
                { label: "Instant release", sub: "On approval" },
                { label: "Dispute protection", sub: "Built-in resolution" },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-4 border border-neutral-100"
                >
                  <p className="text-[#361B14] text-sm font-semibold font-['Poppins'] leading-5">
                    {label}
                  </p>
                  <p className="text-[#361B14]/40 text-xs font-['Poppins'] mt-0.5">
                    {sub}
                  </p>
                </div>
              ))}
            </div>

            <OutlineButton>Artisans Sign Up</OutlineButton>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="absolute inset-0 bg-amber-100 rounded-[40px] translate-x-4 translate-y-4" />
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-[40px] overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Secure payments"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS SECTION ── */
function StatsSection() {
  const stats = [
    { value: "203+", label: "Active Artisans", icon: Users },
    {
      value: "97%",
      label: "Higher Productivity",
      icon: TrendingUp,
      highlight: true,
    },
    { value: "3,120", label: "Projects Completed", icon: CheckCircle },
  ];

  return (
    <section className="bg-[#FFF7E9] pb-0 pt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ value, label, icon: Icon, highlight }) => (
            <div
              key={label}
              className={`relative rounded-3xl overflow-hidden h-80 flex flex-col items-center justify-center gap-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)] ${highlight ? "bg-[#FBB13A]" : "bg-white"}`}
            >
              {highlight && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full" />
                  <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full" />
                </div>
              )}
              <div className="p-4 bg-amber-100 rounded-full relative z-10">
                <Icon className="w-7 h-7 text-[#FBB13A]" />
              </div>
              <div className="flex flex-col items-center gap-3 relative z-10">
                <span className="text-[#361B14] text-6xl font-bold font-['Poppins'] leading-none">
                  {value}
                </span>
                <p className="text-[#361B14]/70 text-sm font-medium font-['Poppins'] uppercase tracking-widest text-center">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
function HowItWorksSection() {
  const steps = [
    {
      n: 1,
      title: "Submit your request",
      desc: "Share your design, quantity, and timeline.",
    },
    {
      n: 2,
      title: "Get matched",
      desc: "We connect you with the right verified artisan.",
    },
    {
      n: 3,
      title: "Fund securely",
      desc: "Payments are protected through escrow-backed workflow.",
    },
    {
      n: 4,
      title: "Stay updated",
      desc: "Get production updates via your dashboard and WhatsApp.",
    },
  ];

  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: content */}
          <div className="flex flex-col gap-8">
            <SectionTag>How It Works</SectionTag>

            <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
              <span className="text-[#361B14]">Here's How </span>
              <span className="text-[#FBB13A]">Leddar</span>
              <span className="text-[#361B14]"> Works</span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {steps.map(({ n, title, desc }) => (
                <div
                  key={n}
                  className="bg-white rounded-2xl border border-neutral-100 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-7 h-7 bg-[#FBB13A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-['Poppins']">
                      {n}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#361B14] text-sm font-semibold font-['Poppins'] leading-5 mb-1">
                      {title}
                    </p>
                    <p className="text-[#361B14]/50 text-sm font-normal font-['Poppins'] leading-5">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard preview */}
          <div className="relative rounded-[28px] overflow-hidden aspect-video shadow-[0_8px_60px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Dashboard preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#361B14]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FEATURE CARDS ── */
function FeatureCardsSection() {
  const features = [
    {
      icon: Shield,
      title: "Verified Artisans",
      titleAccent: "",
      desc: "Work with skilled professionals you can trust — no guesswork.",
      highlight: true,
    },
    {
      icon: Layers,
      title: "Escrow-backed",
      titleAccent: " Payment",
      desc: "Track your projects, timelines, and deliverables in one place.",
      highlight: false,
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      titleAccent: " Updates",
      desc: "Communicate clearly with artisans without middlemen or confusion.",
      highlight: false,
    },
    {
      icon: CheckCircle,
      title: "Structured",
      titleAccent: " Workflow",
      desc: "Build trust through ratings, reviews, and performance history.",
      highlight: false,
    },
  ];

  return (
    <section className="bg-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(
            ({ icon: Icon, title, titleAccent, desc, highlight }) => (
              <div
                key={title}
                className={`relative rounded-3xl overflow-hidden h-80 p-8 flex flex-col items-center justify-center gap-8 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_40px_rgba(0,0,0,0.06)] ${highlight ? "bg-[#FBB13A]" : "bg-white"}`}
              >
                {highlight && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full" />
                  </div>
                )}
                <div className="p-4 bg-amber-100 rounded-full relative z-10">
                  <Icon className="w-8 h-8 text-[#FBB13A]" />
                </div>
                <div className="flex flex-col items-center gap-3 text-center relative z-10">
                  <h3 className="text-2xl font-semibold font-['Poppins'] capitalize leading-8">
                    <span
                      className={highlight ? "text-white" : "text-[#361B14]"}
                    >
                      {title}
                    </span>
                    {titleAccent && (
                      <span
                        className={
                          highlight ? "text-white/80" : "text-[#FBB13A]"
                        }
                      >
                        {titleAccent}
                      </span>
                    )}
                  </h3>
                  <p
                    className={`text-sm font-normal font-['Poppins'] leading-6 ${highlight ? "text-white/75" : "text-[#361B14]/55"}`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqs = [
  {
    q: "What is LEDDAR?",
    a: "LEDDAR is a platform that connects clients with trusted artisans and ensures every project is handled with transparency, structure, and secure payments through an escrow system.",
  },
  {
    q: "Who is Leddar for?",
    a: "Leddar is for brands, businesses, and individuals who need reliable artisan production services, as well as skilled artisans looking for consistent, well-paying work.",
  },
  {
    q: "What are the benefits of using the escrow payment system?",
    a: "Our escrow system ensures both parties have complete protection — funds are held securely until work is delivered and approved, making every transaction safe and transparent.",
  },
  {
    q: "Will I get updates during production?",
    a: "Yes. You will receive real-time updates via WhatsApp and your dashboard throughout the entire production process.",
  },
  {
    q: "What happens after I join the waitlist?",
    a: "You'll receive a personal invite to onboard once a slot opens. We keep onboarding intentionally high-quality to maintain platform standards.",
  },
  {
    q: "What kind of services will be available?",
    a: "We currently focus on leather and artisan production, with plans to expand to textiles, ceramics, woodwork, and more skilled trades.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-amber-100 py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 mb-14">
          <SectionTag>Have a look at our FAQ</SectionTag>
          <h2 className="text-center text-[#361B14] text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full px-8 py-7 rounded-2xl flex justify-between items-start gap-8 cursor-pointer transition-all duration-200 ${openIndex === i ? "bg-[#FBB13A] shadow-md" : "bg-white hover:bg-white/80 shadow-sm"}`}
            >
              <div className="flex-1 flex flex-col gap-3">
                <p className="text-xl font-semibold font-['Poppins'] leading-7 text-[#361B14]">
                  {faq.q}
                </p>
                {openIndex === i && (
                  <p className="text-[#361B14]/65 text-base font-normal font-['Poppins'] leading-7">
                    {faq.a}
                  </p>
                )}
              </div>
              <div
                className={`p-3 rounded-full flex-shrink-0 mt-0.5 ${openIndex === i ? "bg-white/30" : "bg-amber-100"}`}
              >
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[#361B14]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#FBB13A]" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <OutlineButton>View All FAQ</OutlineButton>
        </div>
      </div>
    </section>
  );
}

/* ── ARTISANS CTA ── */
function ArtisansCTASection() {
  return (
    <section className="bg-[#FFF7E9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="absolute bottom-0 left-8 w-80 h-80 bg-amber-100 rounded-full -z-0" />
            <div className="relative z-10 rounded-[32px] overflow-hidden aspect-[4/3] shadow-[0_8px_60px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan crafting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-8">
            <SectionTag>For Artisans</SectionTag>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
              <span className="text-[#361B14]">
                Better opportunities for serious{" "}
              </span>
              <span className="text-[#FBB13A]">Artisans</span>
            </h2>

            <p className="text-[#361B14]/60 text-base sm:text-lg font-normal font-['Poppins'] leading-7">
              We're building LEDDAR alongside real artisans and real clients —
              solving real problems from the ground up.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Access verified brand clients directly",
                "Get paid on time, every time",
                "Build your reputation with reviews",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#FBB13A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#FBB13A] rounded-full" />
                  </div>
                  <span className="text-[#361B14]/70 text-base font-['Poppins']">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <OutlineButton className="w-full sm:w-auto">
              Artisans Sign Up
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WAITLIST ── */
function WaitlistSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#FFF7E9] pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#361B14] rounded-[40px] overflow-hidden px-12 lg:px-20 py-20 lg:py-24">
          {/* Background decoration */}
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
              <path
                d="M0,200 C300,0 700,400 1280,160"
                stroke="#FBB13A"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg">
            <SectionTag>
              <span className="text-white">Let's get started</span>
            </SectionTag>

            <div className="mt-8 mb-6 flex flex-col gap-5">
              <h2 className="text-5xl font-semibold font-['Poppins'] capitalize leading-tight">
                <span className="text-white">Join the </span>
                <span className="text-[#FBB13A]">Waitlist.</span>
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
                  Brand Sign Up
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

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BetterWaySection />
      <EscrowSection />
      <StatsSection />
      <HowItWorksSection />
      <FeatureCardsSection />
      <FAQSection />
      <ArtisansCTASection />
      <WaitlistSection />
    </main>
  );
}
