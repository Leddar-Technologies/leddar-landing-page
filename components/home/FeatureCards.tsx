import { features } from "@/lib/home-data";

const iconMap: Record<string, string> = {
  check: "OK",
  stack: "DB",
  signal: "IO",
  shield: "SC",
};

export function FeatureCards() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-8 max-lg:py-[60px] lg:px-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={[
              "rounded-[20px] px-6 py-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:px-7 sm:py-8",
              feature.dark ? "bg-amber2 text-white" : "bg-white",
            ].join(" ")}
          >
            <div
              className={[
                "mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] text-[11px] font-bold",
                feature.dark ? "bg-[rgba(255,255,255,0.2)]" : "bg-[rgba(245,166,35,0.12)]",
              ].join(" ")}
            >
              {iconMap[feature.icon]}
            </div>

            <h3 className={[
              "mb-1 font-serif text-lg font-bold leading-[1.3]",
              feature.dark ? "text-white" : "text-dark",
            ].join(" ")}>
              {feature.title}
              {feature.amber ? (
                <>
                  <br />
                  <span className={feature.dark ? "italic text-[#FFE08A]" : "italic text-amber"}>{feature.amber}</span>
                </>
              ) : null}
            </h3>

            <p className={[
              "text-[13px] leading-[1.7]",
              feature.dark ? "text-[rgba(255,255,255,0.7)]" : "text-stone",
            ].join(" ")}>
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
