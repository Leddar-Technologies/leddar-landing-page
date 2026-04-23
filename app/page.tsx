import {
  ArtisansSection,
  FAQSection,
  FeatureCards,
  Footer,
  Hero,
  HowItWorks,
  MetricsSection,
  Nav,
  ProblemSection,
  SolutionSection,
  WaitlistCTA,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <MetricsSection />
        <FAQSection />
        <FeatureCards />
        <HowItWorks />
        <ArtisansSection />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
