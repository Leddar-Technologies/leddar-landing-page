import { useState } from 'react';
import { CheckCircle, Shield, MessageSquare, Layers, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { Section, Container, SectionLabel, Card, ImagePlaceholder } from '../components/ui';

function HeroSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative pt-32 pb-20 bg-[#FFF7E9] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FBB13A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFE4D4] rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#361B14] leading-tight mb-8">
            Hiring <span className="text-[#FBB13A]">Artisans</span>{' '}
            Shouldn't Feel Like A Gamble
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
              className="flex-1 px-5 py-3.5 rounded-full bg-white border border-[#FFE4D4] text-sm text-[#361B14] placeholder-[#361B14]/40 focus:outline-none focus:border-[#FBB13A] transition-colors"
            />
            <button className="px-7 py-3.5 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-all shadow-md whitespace-nowrap">
              Sign Up Now →
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            { value: '300+', label: 'Artisans Available' },
            { value: '87%', label: 'Higher Productivity' },
            { value: '76%', label: 'Job Success Rate' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5 bg-[#FFE4D4] rounded-full px-5 py-2.5">
              <div className="w-2 h-2 rounded-full bg-[#FBB13A]" />
              <span className="font-heading font-bold text-sm text-[#361B14]">{stat.value}</span>
              <span className="text-xs text-[#361B14]/60">{stat.label.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureSplitSection() {
  return (
    <Section className="bg-[#FFE4D4]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImagePlaceholder className="h-80 lg:h-96 w-full" label="Artisan at work" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FBB13A]/20 rounded-2xl" />
          </div>
          <div>
            <SectionLabel>More Simpler</SectionLabel>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#361B14] mb-4 leading-tight">
              A <span className="text-[#FBB13A]">Better</span> Way To Connect, Work, And Get Paid
            </h2>
            <div className="space-y-3 mb-8">
              {[
                'Submit clear production requests',
                'Get matched with verified artisans',
                'Start with samples when needed',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FBB13A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-[#361B14]/80">{item}</p>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#361B14] text-white font-semibold text-sm rounded-full hover:bg-[#4a2a20] transition-colors">
              Artisan Sign Up <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SecurePaymentsSection() {
  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>We Integrated</SectionLabel>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#361B14] mb-4 leading-tight">
              <span className="text-[#FBB13A]">Secure</span> Escrow Payments
            </h2>
            <p className="text-[#361B14]/60 text-sm leading-relaxed mb-8">
              Payments are held safely and only releases when work is completed as agreed.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#361B14] text-[#361B14] font-semibold text-sm rounded-full hover:bg-[#361B14] hover:text-white transition-all">
              Artisan Sign Up <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-[#FFE4D4] rounded-3xl flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-28 bg-[#FBB13A]/30 rounded-xl flex items-center justify-center">
                    <Shield className="w-12 h-12 text-[#FBB13A]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#361B14] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#FBB13A]" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#FBB13A] rounded-xl flex items-center justify-center shadow-lg">
                <Layers className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StatsSection() {
  const stats = [
    { value: '203+', label: 'Active Artisans', highlight: false },
    { value: '97%', label: 'Higher Productivity', highlight: true },
    { value: '3,120', label: 'Project Completed', highlight: false },
  ];

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map(({ value, label, highlight }) => (
            <Card
              key={label}
              className={`p-8 text-center ${highlight ? 'bg-[#FBB13A] !shadow-lg' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl mb-4 mx-auto flex items-center justify-center ${highlight ? 'bg-[#361B14]' : 'bg-[#FBB13A]/15'}`}>
                <CheckCircle className={`w-5 h-5 ${highlight ? 'text-[#FBB13A]' : 'text-[#FBB13A]'}`} />
              </div>
              <p className={`font-heading font-extrabold text-4xl lg:text-5xl mb-2 ${highlight ? 'text-[#361B14]' : 'text-[#361B14]'}`}>
                {value}
              </p>
              <p className={`text-sm font-medium uppercase tracking-wider ${highlight ? 'text-[#361B14]/80' : 'text-[#361B14]/60'}`}>
                {label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HowLeddarWorksSection() {
  return (
    <Section className="bg-[#FFE4D4]">
      <Container>
        <SectionLabel>How It Works</SectionLabel>
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#361B14] mb-12">
          Here's How <span className="text-[#FBB13A]">Leddar</span> Works.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {[
              { icon: CheckCircle, title: 'Post your project', desc: 'Describe what you need with details, timelines, and requirements.' },
              { icon: Shield, title: 'Get verified', desc: 'We match you with artisans and verify them before connecting.' },
              { icon: Layers, title: 'They produce', desc: 'Artisans get briefed and you get updates throughout production.' },
              { icon: MessageSquare, title: 'Stay updated', desc: 'WhatsApp and dashboard updates keep production visible.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-xl bg-[#FBB13A] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-[#FBB13A]/30 mt-1" />}
                </div>
                <div className="pb-6">
                  <h4 className="font-heading font-semibold text-sm text-[#361B14] mb-1">{title}</h4>
                  <p className="text-xs text-[#361B14]/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="p-0 overflow-hidden">
            <div className="bg-[#361B14] p-4">
              <div className="flex gap-1.5 mb-3">
                {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <p className="text-white/60 text-xs">Quote Request</p>
            </div>
            <div className="p-5 space-y-3">
              {['Request submitted', 'Artisan verified', 'Sample approved', 'Production started'].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${i < 3 ? 'bg-[#FBB13A]' : 'bg-[#FFE4D4]'}`}>
                    {i < 3 && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <div className="flex-1 h-2 bg-[#FFE4D4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FBB13A] rounded-full"
                      style={{ width: `${100 - i * 20}%` }}
                    />
                  </div>
                  <span className={`text-xs font-medium ${i < 3 ? 'text-[#361B14]' : 'text-[#361B14]/40'}`}>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function FeatureGridSection() {
  const features = [
    { icon: Shield, title: 'Verified Artisans', desc: 'Every artisan is screened through ratings, reviews, and performance history.', highlight: true },
    { icon: CheckCircle, title: 'Escrow-Backed Payments', desc: 'Payments are secured and released in milestones, not all at once.', highlight: false },
    { icon: MessageSquare, title: 'WhatsApp Updates', desc: 'Communicate directly with artisans without needing to install software.', highlight: false },
    { icon: Layers, title: 'Structured Workflow', desc: 'Build trust through ratings, reviews, and performance history.', highlight: false },
  ];

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, highlight }) => (
            <Card
              key={title}
              className={`p-6 hover:-translate-y-1 transition-transform duration-300 ${highlight ? 'bg-[#361B14]' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${highlight ? 'bg-[#FBB13A]' : 'bg-[#FBB13A]/15'}`}>
                <Icon className={`w-5 h-5 ${highlight ? 'text-[#361B14]' : 'text-[#FBB13A]'}`} />
              </div>
              <h4 className={`font-heading font-semibold text-sm mb-2 ${highlight ? 'text-white' : 'text-[#361B14]'}`}>{title}</h4>
              <p className={`text-xs leading-relaxed ${highlight ? 'text-white/70' : 'text-[#361B14]/60'}`}>{desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const faqs = [
  { q: 'What is Leddar?', a: 'Leddar is a production platform that connects clients with verified artisans and ensures every project is handled with transparency, structure, and secure payment through an escrow service system.' },
  { q: 'Who is Leddar for?', a: 'Leddar is designed for brands, businesses, and individuals who need reliable artisan production services, as well as skilled artisans looking for consistent, well-paying work opportunities.' },
  { q: 'What are the benefits of using a Receipt AI system?', a: 'Our automated receipt system ensures both parties have clear documentation of every transaction, making disputes easier to resolve and payments more transparent.' },
  { q: 'Will I get updates during production?', a: 'Yes, you will receive real-time updates via WhatsApp and our dashboard throughout the entire production process.' },
  { q: 'What happens after I join the waitlist?', a: "After joining the waitlist, you'll receive an invite to onboard based on availability. We prioritize quality onboarding to maintain platform standards." },
  { q: 'What kind of services will be available?', a: 'We currently focus on leather and artisan production, with plans to expand to other skilled trades including textiles, ceramics, woodwork, and more.' },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <SectionLabel>Have a Look at Our FAQ</SectionLabel>
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#361B14] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                openIndex === i
                  ? 'bg-[#FBB13A] border-[#FBB13A]'
                  : 'bg-white border-[#FFE4D4] hover:border-[#FBB13A]/50'
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-4">
                <span className={`font-heading font-semibold text-sm ${openIndex === i ? 'text-[#361B14]' : 'text-[#361B14]'}`}>
                  {faq.q}
                </span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ml-3 ${openIndex === i ? 'bg-[#361B14]' : 'bg-[#FFE4D4]'}`}>
                  {openIndex === i ? (
                    <ChevronDown className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-[#361B14]" />
                  )}
                </div>
              </div>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#361B14]/80 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#361B14]/20 rounded-full text-sm font-semibold text-[#361B14] hover:bg-[#FFE4D4] transition-colors">
            See More <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </Section>
  );
}

function ArtisanCTASection() {
  return (
    <Section className="bg-[#FFE4D4]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ImagePlaceholder className="h-72 lg:h-80" label="Artisan at work" />
          <div>
            <SectionLabel>For Artisans</SectionLabel>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-[#361B14] mb-4 leading-tight">
              Better Opportunities For Serious <span className="text-[#FBB13A]">Artisans</span>
            </h2>
            <p className="text-[#361B14]/60 text-sm leading-relaxed mb-8">
              We're building 10,000 alongside with artisans and artisan delivery – scaling real presence from the ground up.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#361B14] text-white font-semibold text-sm rounded-full hover:bg-[#4a2a20] transition-colors">
              Artisan Sign Up <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FinalCTASection() {
  const [email, setEmail] = useState('');

  return (
    <Section className="bg-[#FFF7E9] pb-28">
      <Container>
        <div className="relative bg-[#361B14] rounded-3xl overflow-hidden px-8 py-16 lg:px-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FBB13A]/10 rounded-full blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <path d="M0,200 C200,50 400,350 800,200" stroke="#FBB13A" strokeWidth="2" fill="none" />
              <path d="M0,250 C300,100 500,400 800,250" stroke="#FBB13A" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div className="relative z-10 max-w-xl">
            <p className="text-[#FBB13A] text-xs font-semibold uppercase tracking-widest mb-4">Let's Get Started</p>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4 leading-tight">
              Join The <span className="text-[#FBB13A]">Waitlist.</span>
            </h2>
            <p className="text-white/60 text-sm mb-8">
              We're opening access in phases to keep onboarding high quality for both brands and artisans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FBB13A]"
              />
              <button className="px-7 py-3.5 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors whitespace-nowrap">
                Brand Sign Up →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function ArtisanPage() {
  return (
    <main>
      <HeroSection />
      <FeatureSplitSection />
      <SecurePaymentsSection />
      <StatsSection />
      <HowLeddarWorksSection />
      <FeatureGridSection />
      <FAQSection />
      <ArtisanCTASection />
      <FinalCTASection />
    </main>
  );
}
