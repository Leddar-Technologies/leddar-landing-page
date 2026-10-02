import { blogPosts } from "./data/blogPosts";

export const SITE_URL = "https://myleddar.com";
const SITE_NAME = "Leddar";
/* 1200x630 branded card shown when a link is shared on WhatsApp, LinkedIn, X and others */
const SHARE_IMAGE = `${SITE_URL}/og-image.png`;

type PageMeta = { title: string; description: string };

/* Title and description for every fixed page; blog posts take theirs from the post */
const pages: Record<string, PageMeta> = {
  "/": {
    title: "Leddar | Production You Can Trust",
    description:
      "LEDDAR connects brands with verified artisans for structured, accountable production, with escrow-backed payments, sample workflows and production updates.",
  },
  "/about": {
    title: "About Leddar | Building the Trust Layer for Production",
    description:
      "Learn how LEDDAR is building the infrastructure that makes artisan production structured, transparent and accountable for brands and artisans.",
  },
  "/products": {
    title: "Products | Technology Built for Trusted Production | Leddar",
    description:
      "One platform to verify, brief, produce and pay. See how LEDDAR helps brands and artisans manage production requests, samples, tracking and payments.",
  },
  "/artisan": {
    title: "For Artisans | Leddar",
    description:
      "Join LEDDAR as a verified artisan: get matched with verified brands, receive clear production requests and get paid for work done.",
  },
  "/resources": {
    title: "Resources | Footwear and Leather Production Guides | Leddar",
    description:
      "Practical guides for brands on footwear and leather goods production in Nigeria: finding manufacturers, costs, MOQ, materials, tech packs and more.",
  },
  "/policies": {
    title: "Policies | Terms, Privacy, Payments, Samples and KYC | Leddar",
    description:
      "Read LEDDAR's Terms & Conditions, Privacy Policy, Payment, Refund & Cancellation Policy, Sample Policy and KYC / Verification Policy.",
  },
  "/termsCondition": {
    title: "Terms & Conditions | Leddar",
    description:
      "Complete platform terms for brands, artisans and visitors using LEDDAR.",
  },
};

/* Every route that gets its own pre-rendered HTML file and sitemap entry */
export const allRoutes = [
  ...Object.keys(pages),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];

const stripSlash = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

const findPost = (pathname: string) =>
  blogPosts.find((post) => `/blog/${post.slug}` === stripSlash(pathname));

export function getPageMeta(pathname: string): PageMeta {
  const post = findPost(pathname);
  if (post)
    return { title: `${post.title} | ${SITE_NAME}`, description: post.summary };
  return pages[stripSlash(pathname)] ?? pages["/"];
}

/* The host serves each pre-rendered page from its folder, so canonical URLs end in a slash */
export function canonicalUrl(pathname: string) {
  const path = stripSlash(pathname);
  return `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function structuredData(pathname: string) {
  const post = findPost(pathname);
  if (post)
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.summary,
      articleSection: post.category,
      author: { "@type": "Person", name: post.author },
      publisher: { "@type": "Organization", name: "LEDDAR", url: SITE_URL },
      mainEntityOfPage: canonicalUrl(pathname),
    };
  if (stripSlash(pathname) === "/")
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LEDDAR",
      legalName: "Leddar Systems Limited",
      url: SITE_URL,
      logo: `${SITE_URL}/leddar-logo.svg`,
      description: pages["/"].description,
    };
  return null;
}

/* Head tags written into each pre-rendered page at build time */
export function renderHeadTags(pathname: string) {
  const { title, description } = getPageMeta(pathname);
  const url = canonicalUrl(pathname);
  const data = structuredData(pathname);
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:type" content="${findPost(pathname) ? "article" : "website"}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SHARE_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${SHARE_IMAGE}" />`,
  ];
  if (data)
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
    );
  return tags.join("\n  ");
}

/* Keeps the tab title and head tags in step with in-app navigation */
export function applyPageMeta(pathname: string) {
  const { title, description } = getPageMeta(pathname);
  const url = canonicalUrl(pathname);
  const set = (selector: string, attribute: string, value: string) =>
    document.querySelector(selector)?.setAttribute(attribute, value);

  document.title = title;
  set('meta[name="description"]', "content", description);
  set('link[rel="canonical"]', "href", url);
  set('meta[property="og:title"]', "content", title);
  set('meta[property="og:description"]', "content", description);
  set('meta[property="og:url"]', "content", url);
}
