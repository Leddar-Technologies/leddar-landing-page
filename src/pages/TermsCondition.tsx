import { Download } from "lucide-react";
import { policies } from "../data/policies";
import PolicyBlockView from "../components/PolicyBlockView";

/* Same text as the Terms of Service tab on the Policies page, taken from public/docs/terms-condition.pdf */
const terms = policies.find((p) => p.id === "terms")!;

const sectionLinks = terms.blocks.flatMap((block) =>
  block.t === "h2"
    ? [
        {
          id: block.text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, ""),
          label: block.text,
        },
      ]
    : [],
);

export default function TermsCondition() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#FFF7E9] via-[#FFF3E1] to-[#FFEFD9]">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      >
        <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-[#FBB13A]/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#D86C45]/15 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-5 pt-20 pb-10 sm:px-8 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-14 lg:px-10 xl:pt-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
          <article className="rounded-3xl border border-[#E8C9A8] bg-[#FFFCF6]/95 p-5 shadow-[0_20px_60px_rgba(54,27,20,0.08)] backdrop-blur sm:p-8 lg:p-10">
            <div className="mb-6 border-b border-[#E8C9A8] pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9B5D33]">
                Legal Document
              </p>
              <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-[#2E1711] sm:text-4xl">
                Terms & Conditions
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5A3327]">
                Complete platform terms for brands, artisans, and visitors using
                LEDDAR.
              </p>
            </div>

            <div className="mb-8">
              {terms.meta.map((item) => (
                <p key={item} className="text-sm text-[#361B14]/60 leading-6">
                  {item}
                </p>
              ))}
              <a
                href={terms.pdf}
                download
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C3832B] hover:text-[#9B5D33] transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF
              </a>
            </div>

            {terms.blocks.map((block, i) => (
              <PolicyBlockView key={i} block={block} />
            ))}
          </article>

          <aside className="hidden lg:block lg:sticky lg:top-24">
            <nav className="rounded-2xl border border-[#E8C9A8] bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8D5231]">
                On This Page
              </p>
              <ul className="max-h-[70vh] space-y-1 overflow-auto pr-1">
                {sectionLinks.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-md px-2 py-1 text-sm leading-5 text-[#5A3327] transition-colors duration-150 hover:bg-[#FEE7CF] hover:text-[#2E1711]"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </main>
  );
}
