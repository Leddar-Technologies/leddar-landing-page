import { metrics } from "@/lib/home-data";

const iconMap: Record<string, string> = {
  check: "OK",
  chart: "UP",
  shield: "SC",
};

export function MetricsSection() {
  return (
    <section className="relative flex items-center justify-center bg-cream px-4 pb-20 pt-[60px] sm:px-8 lg:px-16 max-lg:py-[60px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(245,166,35,0.07)]" />
      <div className="relative z-[2] flex flex-wrap items-center justify-center gap-6 max-lg:flex-col">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className={[
              "w-full max-w-[320px] rounded-[20px] px-8 py-8 text-center shadow-[0_4px_28px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 sm:px-11 sm:py-10",
              metric.featured
                ? "z-[3] bg-amber2 shadow-[0_12px_48px_rgba(201,146,42,0.3)] lg:scale-[1.06] lg:hover:scale-[1.06]"
                : "bg-card",
            ].join(" ")}
          >
            <div
              className={[
                "mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-xl text-[11px] font-bold",
                metric.featured ? "bg-[rgba(255,255,255,0.2)]" : "bg-[rgba(245,166,35,0.15)]",
              ].join(" ")}
            >
              {iconMap[metric.icon]}
            </div>
            <div className="mb-[10px] font-serif text-[clamp(40px,10vw,52px)] font-black leading-none text-dark">
              {metric.value.endsWith("+") ? (
                <>
                  {metric.value.slice(0, -1)}
                  <span className="text-amber">+</span>
                </>
              ) : (
                metric.value
              )}
            </div>
            <div
              className={[
                "text-[11px] font-bold uppercase tracking-[1.5px]",
                metric.featured ? "text-[rgba(60,40,20,0.7)]" : "text-stone",
              ].join(" ")}
            >
              {metric.label}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
