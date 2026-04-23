import { howSteps } from "@/lib/home-data";
import { SectionLabel } from "./SectionLabel";

const iconMap: Record<string, string> = {
  list: "LS",
  handshake: "HS",
  wallet: "WL",
  package: "PK",
};

export function HowItWorks() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-8 max-lg:py-[60px] lg:px-16">
      <div className="mx-auto flex max-w-[1200px] items-start gap-12 lg:gap-20 max-lg:flex-col">
        <div className="flex-1">
          <SectionLabel text="HOW IT WORKS" />
          <h2 className="mb-9 font-serif text-[clamp(30px,8vw,52px)] font-black leading-[1.1] text-dark">
            Here's How <span className="italic text-amber">Leddar</span>
            <br className="hidden sm:block" />
            Works.
          </h2>

          <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1">
            {howSteps.map((step) => (
              <div key={step.title} className="flex items-start gap-[14px]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(245,166,35,0.15)] text-[11px] font-bold">
                  {iconMap[step.icon]}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-dark">{step.title}</h3>
                  <p className="text-[13px] leading-[1.6] text-stone">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[420px]">
          <div className="overflow-hidden rounded-2xl bg-card shadow-[0_20px_60px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-1.5 border-b border-[rgba(0,0,0,0.06)] bg-[#f0e8d8] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>

            <div className="min-h-[320px] max-sm:overflow-x-auto">
              <div className="flex max-sm:min-w-[520px]">
              <aside className="w-40 shrink-0 bg-dark py-4">
                <div className="mb-2.5 border-b border-[rgba(255,255,255,0.08)] px-4 pb-[14px] text-[13px] font-extrabold tracking-[1px] text-amber">
                  LEDDAR
                </div>
                {[
                  "Dashboard",
                  "Quote Request",
                  "Quote Response",
                  "Order Tracker",
                  "Sample Orders",
                  "Invoices",
                  "Order History",
                  "KYC",
                  "Profile",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={[
                      "cursor-pointer px-4 py-[9px] text-[11px] transition-colors",
                      i === 1
                        ? "border-l-2 border-amber bg-[rgba(245,166,35,0.12)] text-amber"
                        : "text-[rgba(255,243,214,0.45)]",
                    ].join(" ")}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              <div className="flex-1 bg-[#f5ede0] p-4">
                <div className="mb-[14px] flex items-start justify-between">
                  <div>
                    <div className="text-base font-extrabold text-dark">Quote Request</div>
                    <div className="mt-0.5 text-[10px] text-stone">Upload your product spec and request a pricing route.</div>
                  </div>
                  <div className="text-right text-[10px] text-stone">
                    <div className="text-[9px]">BUSINESS</div>
                    <strong className="block text-[11px] text-dark">Zara Couture</strong>
                  </div>
                </div>

                <div className="mb-3 rounded-[10px] border-[1.5px] border-dashed border-[rgba(54,27,20,0.2)] bg-white p-[18px] text-center">
                  <div className="mx-auto mb-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FDE7C3] text-[10px] font-bold">
                    PDF
                  </div>
                  <div className="text-[10px] font-bold text-dark">Drag and drop your product files</div>
                  <div className="text-[9px] text-stone">Accepts image and PDF files</div>
                  <div className="mt-1 text-[9px] text-amber">Click to browse files</div>
                </div>

                <div className="mb-1 text-[9px] font-bold text-dark">Product Type</div>
                <select className="mb-2 w-full rounded-md border border-[rgba(54,27,20,0.12)] bg-white px-2.5 py-[7px] text-[10px] text-dark">
                  <option>Bags</option>
                </select>
                <div className="mb-1 text-[9px] font-bold text-dark">Quantity</div>
                <input
                  defaultValue="100"
                  readOnly
                  className="w-full rounded-md border border-[rgba(54,27,20,0.12)] bg-white px-2.5 py-[7px] text-[10px] text-dark"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
