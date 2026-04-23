import { heroStats } from "@/lib/home-data";
import { DrillIllustration, RollerIllustration } from "./Illustrations";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-4 pb-[60px] pt-20 text-center sm:px-8 lg:px-16">
      <div className="absolute left-[-10px] top-1/2 z-[1] hidden w-[220px] -translate-y-1/2 animate-floatY max-lg:hidden">
        <RollerIllustration className="w-full" />
      </div>
      <div className="absolute right-[-10px] top-[42%] z-[1] hidden w-[200px] -translate-y-1/2 animate-floatY [animation-delay:0.8s] max-lg:hidden">
        <DrillIllustration className="w-full" />
      </div>

      <div className="relative z-[2] w-full max-w-[700px]">
        <h1 className="mb-5 font-serif text-[clamp(40px,11vw,80px)] font-black leading-[1.05] text-dark sm:text-[clamp(52px,6vw,80px)]">
          <span className="block italic text-amber">Production</span>
          You Can Finally Trust
        </h1>
        <p className="mx-auto mb-9 max-w-[480px] text-[15px] leading-[1.7] text-muted">
          Work with verified artisans, track production clearly, and build without the usual stress.
        </p>

        <div className="mx-auto mb-12 flex w-full max-w-[460px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center">
          <input
            type="email"
            placeholder="Type your email"
            className="w-full flex-1 border-none bg-transparent px-5 py-[14px] text-sm text-dark outline-none placeholder:text-stone"
          />
          <button className="whitespace-nowrap bg-amber px-6 py-[14px] text-[13px] font-bold uppercase tracking-[0.4px] text-dark transition-colors hover:bg-[#e8960f] sm:px-5">
            JOIN THE WAITLIST {"\u2192"}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:items-center">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-[0.2px] text-dark shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <span className="font-extrabold text-dark">{stat.number}</span>
              <span className="text-[11px] font-semibold uppercase text-stone">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
