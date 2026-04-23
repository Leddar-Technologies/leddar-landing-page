import { solutionItems } from "@/lib/home-data";
import { LockIllustration } from "./Illustrations";
import { SectionLabel } from "./SectionLabel";

export function SolutionSection() {
  return (
    <section className="bg-cream px-4 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] items-center gap-12 py-16 lg:gap-20 lg:py-20 max-lg:flex-col max-lg:py-[60px]">
        <div className="flex-1">
          <SectionLabel text="SOLUTION" />
          <h2 className="mb-6 font-serif text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.15] text-dark">
            A <span className="italic text-amber">Better</span> Way To
            <br className="hidden sm:block" />
            Manage Production
          </h2>
          <ul className="mb-8 list-none">
            {solutionItems.map((item) => (
              <li key={item} className="mb-[10px] flex items-start gap-[10px] text-sm leading-[1.6] text-muted">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber" />
                {item}
              </li>
            ))}
          </ul>
          <button className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-dark bg-transparent px-6 py-[11px] text-[13px] font-bold uppercase tracking-[0.4px] text-dark transition-all hover:bg-dark hover:text-white">
            GET DEMO {"\u2192"}
          </button>
        </div>

        <div className="relative flex basis-[380px] items-center justify-center max-lg:basis-auto">
          <span className="absolute right-[5%] top-[10%] h-4 w-4 rounded-full bg-[#4ECDC4] opacity-80" />
          <span className="absolute bottom-[20%] left-[5%] h-3 w-3 rounded-full bg-amber opacity-80" />
          <span className="absolute right-[2%] top-1/2 h-2.5 w-2.5 rotate-[20deg] rounded-[3px] bg-[#FF6B6B] opacity-70" />
          <LockIllustration className="relative z-[2] w-[min(70vw,340px)] animate-floatY [animation-duration:4.5s] [animation-delay:0.5s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]" />
        </div>
      </div>
    </section>
  );
}
