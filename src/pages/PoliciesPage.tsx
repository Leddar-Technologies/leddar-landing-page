import { useMemo, useRef, useState } from "react";
import {
  Shield,
  FileText,
  CreditCard,
  Download,
  Search,
  Package,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, Container, Card } from "../components/ui";
import { policies, type PolicyBlock } from "../data/policies";
import PolicyBlockView from "../components/PolicyBlockView";

const policyIcons: Record<string, LucideIcon> = {
  terms: FileText,
  privacy: Shield,
  payment: CreditCard,
  sample: Package,
  kyc: UserCheck,
};

const ALL_POLICIES_ZIP = "/docs/leddar-policies.zip";

function HeroSection() {
  return (
    <section className="pt-36 pb-16 bg-[#FFF7E9] text-center">
      <Container>
        <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-[#361B14] mb-4">
          Policies and Guidelines
        </h1>
        <p className="text-[#361B14]/60 text-sm max-w-md mx-auto leading-relaxed mb-6">
          Clear policies designed to support trust, structure, and
          accountability across the platform.
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-px bg-[#FBB13A]" />
        </div>
      </Container>
    </section>
  );
}

function DownloadCardsSection() {
  const cards = [
    {
      icon: Shield,
      title: "Privacy Policy",
      desc: "How we collect, use, and protect your data across our services and platform integrations.",
      size: "PDF 209 KB",
      label: "Download Policy",
      url: "/docs/privacy-policy.pdf",
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      desc: "The legal framework governing the use of the Leddar ecosystem and professional software tools.",
      size: "PDF 269 KB",
      label: "Download PDF",
      url: "/docs/terms-condition.pdf",
    },
    {
      icon: CreditCard,
      title: "Payments & Refunds",
      desc: "Transparent guidelines regarding transaction processing, subscription billing, and refund eligibility.",
      size: "PDF 128 KB",
      label: "Download Policy",
      url: "/docs/payment-refundment-cancellation-policy.pdf",
    },
  ];

  return (
    <Section className="bg-[#FFE4D4] py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, desc, size, label, url }) => (
            <Card key={title} className="p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-[#FFF7E9] rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#361B14]" />
                </div>
                <span className="text-xs text-[#361B14]/50">{size}</span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#361B14] mb-2">
                {title}
              </h3>
              <p className="text-xs text-[#361B14]/60 leading-relaxed mb-6 flex-1">
                {desc}
              </p>
              {url ? (
                <a
                  href={url}
                  download
                  className="w-full py-3 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> {label}
                </a>
              ) : (
                <button className="w-full py-3 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> {label}
                </button>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function blockText(block: PolicyBlock) {
  if (block.t === "table")
    return [...block.head, ...block.rows.flat()].join(" ");
  if ("items" in block) return block.items.join(" ");
  return block.text;
}

/* Group a policy's blocks under their numbered headings so search can filter whole sections */
function groupSections(blocks: PolicyBlock[]) {
  const sections: PolicyBlock[][] = [];
  blocks.forEach((block) => {
    if (block.t === "h2" || sections.length === 0) sections.push([]);
    sections[sections.length - 1].push(block);
  });
  return sections;
}

function PolicyContentSection() {
  const [activeId, setActiveId] = useState(policies[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const policy = policies.find((p) => p.id === activeId) ?? policies[0];
  const sections = useMemo(() => groupSections(policy.blocks), [policy]);
  const query = searchQuery.trim().toLowerCase();
  const visibleSections = query
    ? sections.filter((blocks) =>
        blocks.some((block) => blockText(block).toLowerCase().includes(query)),
      )
    : sections;

  const selectPolicy = (id: string) => {
    setActiveId(id);
    setSearchQuery("");
    // Bring the new policy into view if its start is scrolled past (or sits below the sidebar on mobile)
    const el = contentRef.current;
    if (el) {
      const top = el.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * 0.6) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-5 shadow-sm lg:sticky lg:top-24">
              <p className="font-heading font-bold text-sm text-[#361B14] mb-1">
                Policy Documentation
              </p>
              <p className="text-xs text-[#361B14]/50 mb-5">Version 1.0</p>
              <nav className="space-y-1">
                {policies.map(({ id, label }) => {
                  const Icon = policyIcons[id] ?? FileText;
                  return (
                    <button
                      key={id}
                      onClick={() => selectPolicy(id)}
                      aria-current={activeId === id ? "true" : undefined}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors duration-200 ${
                        activeId === id
                          ? "bg-[#FFF7E9] text-[#361B14] font-semibold"
                          : "text-[#361B14]/60 hover:text-[#361B14] hover:bg-[#FFF7E9]/50"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{label}</span>
                    </button>
                  );
                })}
                <div className="mt-4 border-t border-[#FFE4D4] pt-4">
                  <a
                    href={ALL_POLICIES_ZIP}
                    download
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#361B14]/60 hover:text-[#361B14] hover:bg-[#FFF7E9]/50 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Download All PDF</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div ref={contentRef} className="lg:col-span-9 scroll-mt-28">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#361B14]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search within ${policy.label}...`}
                className="w-full pl-11 pr-5 py-3.5 bg-white border border-[#FFE4D4] rounded-xl text-sm text-[#361B14] placeholder-[#361B14]/40 focus:outline-none focus:border-[#FBB13A]"
              />
            </div>

            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14]">
                {policy.title}
              </h2>
              <a
                href={policy.pdf}
                download
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FBB13A] hover:text-[#f0a520] transition-colors mt-2"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF
              </a>
            </div>
            {policy.subtitle && (
              <p className="text-sm text-[#361B14]/60 leading-relaxed mb-3">
                {policy.subtitle}
              </p>
            )}
            <div className="mb-8">
              {policy.meta.map((item) => (
                <p key={item} className="text-xs text-[#361B14]/50 leading-5">
                  {item}
                </p>
              ))}
            </div>

            {policy.note && (
              <div className="bg-white/60 border-l-4 border-[#FBB13A] rounded-r-xl p-4 mb-8">
                <p className="font-heading font-semibold text-xs text-[#FBB13A] uppercase tracking-wider mb-2">
                  {policy.note.label}
                </p>
                <ul className="space-y-1">
                  {policy.note.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#361B14]/70 leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {visibleSections.length === 0 && (
              <p className="text-sm text-[#361B14]/60">
                No sections in {policy.label} match “{searchQuery.trim()}”.
              </p>
            )}

            {visibleSections.map((blocks, i) => (
              <div key={`${policy.id}-${i}`} className="mb-8">
                {blocks.map((block, j) => (
                  <PolicyBlockView key={j} block={block} />
                ))}
                {i < visibleSections.length - 1 && (
                  <div className="border-b border-[#FFE4D4] mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SupportCTASection() {
  return (
    <Section className="bg-[#FFF7E9] pb-28">
      <Container>
        <div className="relative bg-[#361B14] rounded-3xl overflow-hidden px-8 py-16 lg:px-20 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FBB13A]/10 rounded-full blur-3xl" />
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0,200 C200,50 400,350 800,200"
                stroke="#FBB13A"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
              Need help understanding a policy?
            </h2>
            <p className="text-white/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Our legal and compliance teams are available to clarify any
              questions regarding platform governance or data handling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:support@myleddar.com"
                className="px-7 py-3.5 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors"
              >
                Contact Support →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function PoliciesPage() {
  return (
    <main>
      <HeroSection />
      <DownloadCardsSection />
      <PolicyContentSection />
      <SupportCTASection />
    </main>
  );
}
