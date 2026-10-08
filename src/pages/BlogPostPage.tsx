import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Heart,
  Share2,
  UserRound,
} from "lucide-react";
import { Container } from "../components/ui";
import SocialLinks from "../components/SocialLinks";
import { blogPosts, type BlogBlock } from "../data/blogPosts";

function BlogBlockView({ block }: { block: BlogBlock }) {
  switch (block.t) {
    case "h2":
      return (
        <h2 className="font-heading font-bold text-xl lg:text-2xl text-[#361B14] mt-10 mb-3">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-base text-[#361B14]/75 leading-8 mb-4">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-2.5 mb-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FBB13A] flex-shrink-0 mt-3" />
              <span className="text-base text-[#361B14]/75 leading-8">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2.5 mb-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-base font-semibold text-[#FBB13A] leading-8 flex-shrink-0 w-5">
                {i + 1}.
              </span>
              <span className="text-base text-[#361B14]/75 leading-8">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
  }
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-[#FFF7E9] pt-36 pb-28 text-center">
        <Container>
          <h1 className="font-heading font-bold text-3xl text-[#361B14] mb-4">
            We couldn't find that article
          </h1>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FBB13A] hover:text-[#f0a520] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
        </Container>
      </main>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category === post.category) -
        Number(a.category === post.category),
    )
    .slice(0, 3);

  return (
    <main className="bg-[#FFF7E9] pt-32 lg:pt-36 pb-24">
      <Container>
        <article className="max-w-3xl mx-auto">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#361B14]/60 hover:text-[#FBB13A] uppercase tracking-widest transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          <p className="text-xs font-semibold text-[#FBB13A] uppercase tracking-wider mb-4">
            {post.category}
          </p>
          <h1 className="font-heading font-extrabold text-3xl lg:text-5xl text-[#361B14] leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#361B14]/60 mb-6">
            <span className="inline-flex items-center gap-2">
              <UserRound className="w-4 h-4 text-[#FBB13A]" />
              By{" "}
              <span className="font-semibold text-[#361B14]">
                {post.author}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#FBB13A]" />
              {post.views.toLocaleString("en-US")} views
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#FBB13A]" />
              {post.likes.toLocaleString("en-US")} likes
            </span>
            <span className="inline-flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#FBB13A]" />
              {post.shares.toLocaleString("en-US")} shares
            </span>
          </div>
          <img
            src={post.image}
            alt={post.title}
            width={1600}
            height={900}
            className="w-full h-auto rounded-3xl shadow-[0_8px_40px_rgba(54,27,20,0.12)] mb-10"
          />

          {post.blocks.map((block, i) => (
            <BlogBlockView key={i} block={block} />
          ))}

          <a
            href="https://brand.myleddar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-7 py-3.5 bg-[#FBB13A] text-[#361B14] font-bold text-sm rounded-full hover:bg-[#f0a520] transition-colors"
          >
            Start a Production Request <ArrowRight className="w-4 h-4" />
          </a>

          <div className="mt-12 pt-8 border-t border-[#FFE4D4] flex flex-wrap items-center justify-between gap-4">
            <p className="font-heading font-semibold text-sm text-[#361B14]">
              Follow LEDDAR
            </p>
            <SocialLinks />
          </div>
        </article>

        <div className="max-w-5xl mx-auto mt-20 pt-12 border-t border-[#FFE4D4]">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-[#361B14] mb-6">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map(({ slug, category, title, image }) => (
              <Link
                key={slug}
                to={`/blog/${slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={image}
                  alt=""
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-[#FBB13A] uppercase tracking-wider mb-3">
                    {category}
                  </span>
                  <span className="font-heading font-semibold text-sm text-[#361B14] leading-6 mb-4 flex-1">
                    {title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#361B14] group-hover:text-[#FBB13A] uppercase tracking-wide transition-colors">
                    View more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
