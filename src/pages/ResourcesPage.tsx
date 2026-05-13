import { useState } from 'react';
import { Search, ArrowRight, Zap, Layers, BookOpen, BarChart2, Users, FileText, ChevronRight } from 'lucide-react';
import { Section, Container, SectionLabel, Card, ImagePlaceholder } from '../components/ui';

const categories = ['All', 'Guides', 'Insights', 'Templates', 'Case Studies'];

function HeroSection() {
  return (
    <section className="pt-36 pb-20 bg-[#FFF7E9] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl xl:text-6xl text-[#361B14] leading-tight mb-4">
              Refined assets for <span className="text-[#FBB13A]">peak production</span>
            </h1>
            <p className="text-[#361B14]/60 text-sm leading-relaxed mb-8">
              Curated frameworks, technical guides, and industry insights designed to elevate your creative workflow.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-all shadow-md">
                Browse →
              </button>
              <button className="px-6 py-3 text-[#361B14] font-semibold text-sm hover:text-[#FBB13A] transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="relative">
            <ImagePlaceholder className="h-72 lg:h-80 w-full" label="Abstract visual" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SearchFilterSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  return (
    <div className="bg-[#FFF7E9] py-6">
      <Container>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#361B14]/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by topic, type or keyword"
              className="w-full pl-11 pr-5 py-3 bg-white border border-[#FFE4D4] rounded-xl text-sm text-[#361B14] placeholder-[#361B14]/40 focus:outline-none focus:border-[#FBB13A]"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FBB13A] text-[#361B14]'
                    : 'bg-white text-[#361B14]/60 hover:text-[#361B14] border border-[#FFE4D4]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function EssentialStartersSection() {
  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <SectionLabel>Foundation</SectionLabel>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14] mb-8">Essential Starters</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: Zap,
              tag: 'Masterclass Guide',
              title: 'Production Architecture 101',
              desc: 'A structural framework for trust-led output, designed for high-performing creative units.',
              link: 'Access Blueprint',
            },
            {
              icon: Layers,
              tag: 'Template Suite',
              title: 'The Professional Starter Kit',
              desc: 'Optimized assets for budgeting, scheduling, and high-level stakeholder reporting.',
              link: 'Download Kit',
            },
          ].map(({ icon: Icon, tag, title, desc, link }) => (
            <Card key={title} className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 bg-[#FBB13A]/15 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#FBB13A]" />
                </div>
                <span className="text-xs text-[#361B14]/50 uppercase tracking-wider">{tag}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#361B14] mb-3">{title}</h3>
              <p className="text-sm text-[#361B14]/60 leading-relaxed mb-6">{desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#361B14] hover:text-[#FBB13A] transition-colors uppercase tracking-wide text-xs">
                {link} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const publications = [
  { tag: 'Insights', title: 'The Future of Creative Automation', desc: 'Analyzing the shift from manual-labor to AI-orchestrated studio management.', icon: BarChart2 },
  { tag: 'Platform', title: 'Visualizing Data Pipelines', desc: 'How to build intuitive reporting layers for complex project workflows.', icon: Layers },
  { tag: 'Case Study', title: 'Studio X: Scaling Velocity', desc: 'A look at how a boutique agency increased output by 40% in one quarter.', icon: Zap },
  { tag: 'Template', title: 'Client Alignment Protocols', desc: 'Checklists and documents to set expectations before a pixel is moved.', icon: FileText },
  { tag: 'Updates', title: 'Season Release: Q4 2024', desc: 'New multi-currency support and team-wide permission granularity.', icon: BookOpen },
  { tag: 'Methodology', title: 'Radical Transparency Models', desc: 'Balancing project visibility with focus time for creative teams.', icon: Users },
];

function LatestPublicationsSection() {
  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14]">Latest Publications</h2>
          <a href="#" className="text-xs font-semibold text-[#361B14]/60 hover:text-[#FBB13A] uppercase tracking-widest transition-colors">
            View Archives
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {publications.map(({ tag, title, desc, icon: Icon }) => (
            <Card key={title} className="p-5 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#FBB13A] uppercase tracking-wider">{tag}</span>
                <ChevronRight className="w-4 h-4 text-[#361B14]/30 group-hover:text-[#FBB13A] transition-colors" />
              </div>
              <h4 className="font-heading font-semibold text-sm text-[#361B14] mb-2">{title}</h4>
              <p className="text-xs text-[#361B14]/60 leading-relaxed mb-4">{desc}</p>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-[#FBB13A]/15 rounded-md flex items-center justify-center">
                  <Icon className="w-3 h-3 text-[#FBB13A]" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const visualSeries = [
  { title: 'The Trust Framework', type: 'Guide & Video' },
  { title: 'Effective Scaling', type: 'Runbook' },
  { title: 'Clarity in Budgeting', type: 'Case Study' },
  { title: 'Optimized Workflows', type: 'Interactive Template' },
];

function VisualSeriesSection() {
  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <SectionLabel>Guide & Resources</SectionLabel>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14] mb-3">The Visual Series</h2>
        <p className="text-[#361B14]/60 text-sm mb-8 max-w-md">
          Abstract conceptualizations of production principles, captured through high-fidelity visual guides.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {visualSeries.map(({ title, type }) => (
            <div key={title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-3">
                <ImagePlaceholder className="h-40 w-full rounded-2xl" label={title} />
                <div className="absolute inset-0 bg-[#361B14]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-heading font-semibold text-xs text-[#361B14] mb-1">{title}</p>
              <p className="text-xs text-[#361B14]/50 uppercase tracking-wider">{type}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ResourceCTASection() {
  return (
    <Section className="bg-[#FFF7E9] pb-28">
      <Container>
        <div className="relative bg-[#361B14] rounded-3xl overflow-hidden px-8 py-16 lg:px-16 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FBB13A]/10 rounded-full blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <path d="M0,200 C200,50 400,350 800,200" stroke="#FBB13A" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
              Looking for a bespoke resource strategy?
            </h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Our specialists are available for consultation to help align our resources with your studio's unique structure.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function ResourcesPage() {
  return (
    <main>
      <HeroSection />
      <SearchFilterSection />
      <EssentialStartersSection />
      <LatestPublicationsSection />
      <VisualSeriesSection />
      <ResourceCTASection />
    </main>
  );
}
