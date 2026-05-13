import { useState } from 'react';
import { Shield, FileText, CreditCard, Download, Search, ChevronRight, ArrowRight, Cookie, Lock, AlertCircle, Globe } from 'lucide-react';
import { Section, Container, SectionLabel, Card, ImagePlaceholder } from '../components/ui';

const sidebarItems = [
  { icon: FileText, label: 'Terms of Service', active: true },
  { icon: Shield, label: 'Privacy Policy', active: false },
  { icon: Cookie, label: 'Cookie Policy', active: false },
  { icon: AlertCircle, label: 'Acceptable Use', active: false },
  { icon: Lock, label: 'Security', active: false },
  { icon: Download, label: 'Download All PDF', active: false, isLink: true },
];

const termsContent = [
  {
    title: '1. Introduction',
    body: 'Welcome to Leddar. These Terms & Conditions govern your use of our website and software platform. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.',
    highlight: '"We prioritize your project integrity and data security while providing professional-grade management tools. In return, we expect responsible usage and adherence to security protocols."',
    highlightLabel: 'Key Summary',
  },
  {
    title: '2. Intellectual Property',
    body: "The Service and its original content, features, and functionality are and will remain the exclusive property of Leddar and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.",
    highlight: null,
    highlightLabel: null,
  },
  {
    title: '3. User Responsibilities',
    bullets: [
      'Account information must be accurate and current.',
      'You are responsible for maintaining password confidentiality.',
      'Users must comply with all local and international laws.',
    ],
    highlight: null,
    highlightLabel: null,
  },
];

function HeroSection() {
  return (
    <section className="pt-36 pb-16 bg-[#FFF7E9] text-center">
      <Container>
        <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-[#361B14] mb-4">
          Policies and Guidelines
        </h1>
        <p className="text-[#361B14]/60 text-sm max-w-md mx-auto leading-relaxed mb-6">
          Clear policies designed to support trust, structure, and accountability across the platform.
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
      title: 'Privacy Policy',
      desc: 'How we collect, use, and protect your data across our services and platform integrations.',
      size: 'PDF 1.2MB',
      label: 'Download Policy',
    },
    {
      icon: FileText,
      title: 'Terms & Conditions',
      desc: 'The legal framework governing the use of the Leddar ecosystem and professional software tools.',
      size: 'PDF 0.8MB',
      label: 'Download PDF',
    },
    {
      icon: CreditCard,
      title: 'Payments & Refunds',
      desc: 'Transparent guidelines regarding transaction processing, subscription billing, and refund eligibility.',
      size: 'PDF 0.5MB',
      label: 'Download Policy',
    },
  ];

  return (
    <Section className="bg-[#FFE4D4] py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, desc, size, label }) => (
            <Card key={title} className="p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-[#FFF7E9] rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#361B14]" />
                </div>
                <span className="text-xs text-[#361B14]/50">{size}</span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#361B14] mb-2">{title}</h3>
              <p className="text-xs text-[#361B14]/60 leading-relaxed mb-6 flex-1">{desc}</p>
              <button className="w-full py-3 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> {label}
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PolicyContentSection() {
  const [activeSection, setActiveSection] = useState('Terms of Service');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
              <p className="font-heading font-bold text-sm text-[#361B14] mb-1">Policy Documentation</p>
              <p className="text-xs text-[#361B14]/50 mb-5">Version 2.4.0</p>
              <nav className="space-y-1">
                {sidebarItems.map(({ icon: Icon, label, active, isLink }) => (
                  <button
                    key={label}
                    onClick={() => setActiveSection(label)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors duration-200 ${
                      activeSection === label
                        ? 'bg-[#FFF7E9] text-[#361B14] font-semibold'
                        : 'text-[#361B14]/60 hover:text-[#361B14] hover:bg-[#FFF7E9]/50'
                    } ${isLink ? 'mt-4 border-t border-[#FFE4D4] pt-4' : ''}`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-6">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#361B14]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search within Terms of Service..."
                className="w-full pl-11 pr-5 py-3.5 bg-white border border-[#FFE4D4] rounded-xl text-sm text-[#361B14] placeholder-[#361B14]/40 focus:outline-none focus:border-[#FBB13A]"
              />
            </div>

            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14] mb-2">
              Terms &amp; Conditions
            </h2>
            <p className="text-xs text-[#361B14]/50 mb-8">Effective Date: January 1, 2024</p>

            {termsContent.map((section, i) => (
              <div key={i} className="mb-8">
                <h3 className="font-heading font-bold text-lg text-[#361B14] mb-3">{section.title}</h3>
                {section.body && (
                  <p className="text-sm text-[#361B14]/70 leading-relaxed mb-4">{section.body}</p>
                )}
                {section.highlight && (
                  <div className="bg-[#FFF7E9] border-l-4 border-[#FBB13A] rounded-r-xl p-4 mb-4">
                    {section.highlightLabel && (
                      <p className="font-heading font-semibold text-xs text-[#FBB13A] uppercase tracking-wider mb-2">
                        {section.highlightLabel}
                      </p>
                    )}
                    <p className="text-sm text-[#361B14]/70 italic leading-relaxed">{section.highlight}</p>
                  </div>
                )}
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FBB13A] flex-shrink-0 mt-2" />
                        <span className="text-sm text-[#361B14]/70 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {i < termsContent.length - 1 && (
                  <div className="border-b border-[#FFE4D4] mt-8" />
                )}
              </div>
            ))}
          </div>

          {/* Right card */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <Card className="overflow-hidden">
                <ImagePlaceholder className="h-36 rounded-b-none" label="Security image" />
                <div className="p-4 bg-[#FFE4D4]">
                  <p className="font-heading font-semibold text-xs text-[#361B14] mb-1">Official Registry</p>
                  <p className="text-xs text-[#361B14]/60 leading-relaxed">
                    Verified for Enterprise Use by the Global Trust Alliance 2024.
                  </p>
                </div>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-[#FBB13A]" />
                  <p className="font-heading font-semibold text-xs text-[#361B14]">Global Compliance</p>
                </div>
                <p className="text-xs text-[#361B14]/60 leading-relaxed">
                  Our policies align with GDPR, CCPA, and international data protection standards.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function DocumentationCardsSection() {
  const docs = [
    { title: 'Cookie Policy', desc: 'Manage your tracking preferences and learn how we use cookies for performance.', link: 'View Details' },
    { title: 'Security Audit', desc: 'Review our latest third-party security certifications and platform hardening docs.', link: 'View Details' },
    { title: 'API Terms', desc: 'Developer-specific guidelines for integrating with the Leddar ecosystem.', link: 'View Details' },
    { title: 'SLA Agreement', desc: 'Uptime guarantees and support response time commitments for enterprise partners.', link: 'View Details' },
  ];

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14] mb-8">
          Further Documentation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map(({ title, desc, link }) => (
            <Card key={title} className="p-5">
              <h4 className="font-heading font-semibold text-sm text-[#361B14] mb-2">{title}</h4>
              <p className="text-xs text-[#361B14]/60 leading-relaxed mb-4">{desc}</p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FBB13A] hover:text-[#f0a520] transition-colors">
                {link} <ArrowRight className="w-3 h-3" />
              </a>
            </Card>
          ))}
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
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <path d="M0,200 C200,50 400,350 800,200" stroke="#FBB13A" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
              Need help understanding a policy?
            </h2>
            <p className="text-white/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Our legal and compliance teams are available to clarify any questions regarding platform governance or data handling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-7 py-3.5 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors">
                Contact Support →
              </button>
              <button className="px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors">
                Trade Briefly →
              </button>
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
      <DocumentationCardsSection />
      <SupportCTASection />
    </main>
  );
}
