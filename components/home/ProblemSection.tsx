import { CalendarIllustration } from "./Illustrations";

export function ProblemSection() {
  return (
    <section className="bg-cream px-16 max-lg:px-8">
      <div className="mx-auto flex max-w-[1200px] items-center gap-20 py-20 max-lg:flex-col max-lg:py-[60px]">
        <div className="relative flex basis-[420px] items-center justify-center max-lg:basis-auto">
          <div className="relative flex h-[380px] w-[380px] items-center justify-center overflow-visible rounded-full bg-[#FFE8A3]">
            <CalendarIllustration className="w-[320px] animate-floatY drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-[14px] text-[11px] font-bold uppercase tracking-[1.5px] text-amber">o PROBLEM</p>
          <h2 className="mb-[18px] font-serif text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.15] text-dark">
            <span className="italic text-amber">Production</span> Is Still
            <br />
            Too Uncertain
          </h2>
          <p className="mb-8 max-w-[400px] text-[15px] leading-[1.75] text-muted">
            Too many brands rely on scattered chats,
            <br />
            unclear pricing, and unverified production
            <br />
            partners.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-dark bg-transparent px-6 py-[11px] text-[13px] font-bold uppercase tracking-[0.4px] text-dark transition-all hover:bg-dark hover:text-white">
            LEARN MORE ->
          </button>
        </div>
      </div>
    </section>
  );
}
