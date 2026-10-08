import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Layers,
  Factory,
  Store,
  Hammer,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Section, Container, SectionLabel, Card } from "../components/ui";
import {
  blogCategories,
  blogPosts,
  type BlogCategory,
  type BlogPost,
} from "../data/blogPosts";

const categories = ["All", ...blogCategories];

const categoryIcons: Record<BlogCategory, LucideIcon> = {
  "Production & Manufacturing": Factory,
  "Materials & Quality": Layers,
  "Building Your Brand": Store,
  "Craft & Artisans": Hammer,
  "Leddar Stories": BookOpen,
};

function HeroSection() {
  return (
    <section className="pt-36 pb-20 bg-[#FFF7E9] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl xl:text-6xl text-[#361B14] leading-tight mb-4">
              Refined assets for{" "}
              <span className="text-[#FBB13A]">peak production</span>
            </h1>
            <p className="text-[#361B14]/60 text-sm leading-relaxed mb-8">
              Curated frameworks, technical guides, and industry insights
              designed to elevate your creative workflow.
            </p>
          </div>
          <div className="relative">
            <img
              src="/leather-texture.jpg"
              alt="Close-up of stitched brown leather"
              className="h-72 lg:h-80 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SearchFilterSection({
  query,
  setQuery,
  activeCategory,
  setActiveCategory,
}: {
  query: string;
  setQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}) {
  return (
    <div className="bg-[#FFF7E9] py-6">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#361B14]/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by topic, type or keyword"
              className="w-full pl-11 pr-5 py-3 bg-white border border-[#FFE4D4] rounded-xl text-sm text-[#361B14] placeholder-[#361B14]/40 focus:outline-none focus:border-[#FBB13A]"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#FBB13A] text-[#361B14]"
                    : "bg-white text-[#361B14]/60 hover:text-[#361B14] border border-[#FFE4D4]"
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

/* Everything a visitor might search a post by: title, summary, category, author and body */
function searchText({ title, summary, category, author, blocks }: BlogPost) {
  const body = blocks.map((b) => ("items" in b ? b.items.join(" ") : b.text));
  return [title, summary, category, author, ...body].join(" ").toLowerCase();
}

function LatestPublicationsSection({
  query,
  activeCategory,
}: {
  query: string;
  activeCategory: string;
}) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const haystack = searchText(post);
    return matchesCategory && words.every((word) => haystack.includes(word));
  });

  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14] mb-8">
          Latest Resources
        </h2>
        {filtered.length === 0 ? (
          <p className="text-sm text-[#361B14]/50 text-center py-12">
            {words.length === 0 && activeCategory !== "All"
              ? `No ${activeCategory} yet. Check back soon.`
              : "No resources match your search."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(({ slug, category, title, summary, image }) => {
              const Icon = categoryIcons[category];
              return (
                <Card
                  key={slug}
                  className="relative overflow-hidden group flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#361B14]">
                    <img
                      src={image}
                      alt=""
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#FBB13A]/15 rounded-md flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-[#FBB13A]" />
                      </div>
                      <span className="text-xs font-semibold text-[#FBB13A] uppercase tracking-wider">
                        {category}
                      </span>
                    </div>
                    <h4 className="font-heading font-semibold text-sm text-[#361B14] leading-6 mb-2">
                      {title}
                    </h4>
                    <p className="text-xs text-[#361B14]/60 leading-relaxed mb-5 flex-1">
                      {summary}
                    </p>
                    {/* The stretched ::after makes the whole card clickable */}
                    <Link
                      to={`/blog/${slug}`}
                      aria-label={`View more: ${title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#361B14] group-hover:text-[#FBB13A] uppercase tracking-wide transition-colors after:absolute after:inset-0 after:rounded-2xl"
                    >
                      View more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}

const visualSeries = [
  {
    title: "The Trust Framework",
    type: "Guide & Video",
    image:
      "/minimalist_organic_abstraction__earth_tones__soft_gradient_shapes__high-end_editorial_graphic__cream.png",
  },
  {
    title: "Effective Scaling",
    type: "Runbook",
    image:
      "/minimalist_flowing_lines_abstraction__soft_orange_and_beige__elegant_design__artistic_visualization.png",
  },
  {
    title: "Clarity in Budgeting",
    type: "Case Study",
    image: "/geometric_minimalism.png",
  },
  {
    title: "Optimized Workflows",
    type: "Interactive Template",
    image:
      "/minimal_architecture_abstract__light_and_shadow__warm_neutral_palette__editorial_photography.png",
  },
];

function VisualSeriesSection() {
  return (
    <Section className="bg-[#FFF7E9]">
      <Container>
        <SectionLabel>Guide & Resources</SectionLabel>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-[#361B14] mb-3">
          The Visual Series
        </h2>
        <p className="text-[#361B14]/60 text-sm mb-8 max-w-md">
          Abstract conceptualizations of production principles, captured through
          high-fidelity visual guides.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {visualSeries.map(({ title, type, image }) => (
            <div key={title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-3">
                <img
                  src={image}
                  alt={title}
                  className="h-40 w-full rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-[#361B14]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-heading font-semibold text-xs text-[#361B14] mb-1">
                {title}
              </p>
              <p className="text-xs text-[#361B14]/50 uppercase tracking-wider">
                {type}
              </p>
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
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 lg:px-16 text-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/dark-brown-fabric-motion-texture-background.png')",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FBB13A]/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
              Looking for a bespoke resource strategy?
            </h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Our specialists are available for consultation to help align our
              resources with your studio's unique structure.
            </p>
            <a
              href="mailto:support@myleddar.com?subject=Resource%20consultation"
              className="inline-block px-7 py-3.5 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors"
            >
              Talk to a Specialist →
            </a>
            <p className="text-white/60 text-sm mt-5">
              Or email us at{" "}
              <span className="text-white font-medium select-all">
                support@myleddar.com
              </span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main>
      <HeroSection />
      <SearchFilterSection
        query={query}
        setQuery={setQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <LatestPublicationsSection
        query={query}
        activeCategory={activeCategory}
      />
      <VisualSeriesSection />
      <ResourceCTASection />
    </main>
  );
}
