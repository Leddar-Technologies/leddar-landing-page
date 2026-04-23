import { SectionLabel } from "./SectionLabel";

export function ArtisansSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-8 max-lg:py-[60px] lg:px-16">
      <div className="mx-auto flex max-w-[1200px] items-center gap-12 lg:gap-20 max-lg:flex-col">
        <div className="relative w-full max-w-[420px]">
          <div className="absolute bottom-[-20px] left-[-8px] h-[180px] w-[180px] rounded-full bg-[#FFE8A3] sm:bottom-[-40px] sm:left-[-20px] sm:h-[260px] sm:w-[260px]" />
          <div className="relative h-[min(96vw,420px)] overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#c4b09a_0%,#a08060_50%,#7a6050_100%)]">
            <svg viewBox="0 0 300 420" fill="none" className="absolute inset-0 h-full w-full">
              <rect width="300" height="420" fill="url(#artGrad)" />
              <rect x="40" y="60" width="220" height="160" rx="8" fill="rgba(100,70,40,0.3)" />
              {[0, 1, 2, 3, 4].map((i) => (
                <circle key={i} cx={60 + i * 45} cy={100} r={18} fill="rgba(80,50,30,0.4)" />
              ))}
              <ellipse cx="150" cy="200" rx="45" ry="55" fill="rgba(60,40,25,0.7)" />
              <circle cx="150" cy="130" r="38" fill="rgba(80,55,35,0.8)" />
              <rect x="80" y="240" width="140" height="180" rx="20" fill="rgba(50,80,100,0.7)" />
              <rect x="95" y="248" width="50" height="130" rx="8" fill="rgba(200,60,60,0.5)" />
              <defs>
                <linearGradient id="artGrad" x1="0" y1="0" x2="300" y2="420" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#d4b896" />
                  <stop offset="0.5" stopColor="#b09070" />
                  <stop offset="1" stopColor="#806040" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex-1">
          <SectionLabel text="FOR ARTISANS" />
          <h2 className="mb-[18px] font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.1] text-dark">
            Better Opportunities
            <br className="hidden sm:block" />
            For Serious <span className="italic text-amber">Artisans</span>
          </h2>
          <p className="mb-8 max-w-[420px] text-[15px] leading-[1.75] text-muted">
            We're building LEDDAR alongside real artisans and real clients, solving real problems from the ground up.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-dark bg-transparent px-6 py-[11px] text-[13px] font-bold uppercase tracking-[0.4px] text-dark transition-all hover:bg-dark hover:text-white">
            START FREE TRIAL {"\u2192"}
          </button>
        </div>
      </div>
    </section>
  );
}
