export function WaitlistCTA() {
  return (
    <section className="mx-auto max-w-[1200px] bg-cream px-16 pb-20 max-lg:px-8 max-lg:pb-[60px]">
      <div className="relative flex flex-col gap-8 overflow-hidden rounded-[24px] bg-dark px-20 py-[72px] max-lg:px-10 max-lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(201,146,42,0.35)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(245,166,35,0.15)_0%,transparent_50%)]" />

        <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 10 }, (_, i) => (
            <path
              key={i}
              d={`M0,${80 + i * 20} C150,${40 + i * 20} 300,${120 + i * 20} 450,${80 + i * 20} S750,${40 + i * 20} 900,${80 + i * 20}`}
              stroke="#F5A623"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>

        <div className="relative z-[2] max-w-[500px]">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-amber">
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-amber">
              <div className="h-1.5 w-1.5 rounded-full bg-amber" />
            </div>
            LET'S GET STARTED
          </div>
          <h2 className="mb-4 font-serif text-[clamp(36px,4vw,54px)] font-black leading-[1.1] text-white">
            Join The <span className="italic text-amber">Waitlist.</span>
          </h2>
          <p className="text-[15px] leading-[1.7] text-[rgba(255,243,214,0.6)]">
            We're opening access in phases to keep onboarding high
            <br />
            quality for both brands and artisans.
          </p>
        </div>

        <div className="relative z-[2] flex max-w-[440px] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)]">
          <input
            type="email"
            placeholder="Type your email"
            className="flex-1 border-none bg-transparent px-5 py-[14px] text-sm text-white outline-none placeholder:text-[rgba(255,243,214,0.4)]"
          />
          <button className="whitespace-nowrap bg-amber px-6 py-[14px] text-[13px] font-bold uppercase tracking-[0.4px] text-dark transition-colors hover:bg-[#e8960f]">
            JOIN THE WAITLIST ->
          </button>
        </div>
      </div>
    </section>
  );
}
