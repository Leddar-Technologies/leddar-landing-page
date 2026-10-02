export const blogCategories = [
  "Production & Manufacturing",
  "Materials & Quality",
  "Building Your Brand",
  "Craft & Artisans",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogBlock =
  | { t: "h2" | "p"; text: string }
  | { t: "ul" | "ol"; items: string[] };

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  author: string;
  /* Placeholder counts until views, likes and shares are tracked by the backend */
  views: number;
  likes: number;
  shares: number;
  /* Short summary shown on the Resources cards and used as the page meta description */
  summary: string;
  blocks: BlogBlock[];
};

const defaultAuthor = "Alfred Jarikre";

const h2 = (text: string): BlogBlock => ({ t: "h2", text });
const p = (text: string): BlogBlock => ({ t: "p", text });
const ul = (...items: string[]): BlogBlock => ({ t: "ul", items });
const ol = (...items: string[]): BlogBlock => ({ t: "ol", items });

/* Passages the source document repeats across several posts */
const productionChecklist = ol(
  "Define product category and target customer.",
  "Confirm design or reference, materials and quantity.",
  "Use a paid sample before bulk production.",
  "Document corrections and final approval.",
  "Confirm price, timeline, quality standard and payment milestones.",
  "Keep one approved version of the production specification.",
);

const brandChecklist = ol(
  "Define a narrow target customer and product promise.",
  "Keep the first range focused.",
  "Build product economics before ordering inventory.",
  "Sample before committing to launch dates.",
  "Use early sales data to plan reorders.",
  "Choose production complexity appropriate to your stage.",
);

const usingLeddar: BlogBlock[] = [
  h2("What this means for a brand using LEDDAR"),
  p(
    "LEDDAR is positioned around structured, accountable production. The platform should not replace the decisions above with blind automation; it should make them easier to manage by helping brands move from a clear brief to suitable production partners, documented approvals, production visibility and a controlled path to delivery.",
  ),
];

// Post text below is copied word for word from the BLOGPOSTS document.
export const blogPosts: BlogPost[] = [
  {
    slug: "footwear-manufacturer-nigeria",
    author: defaultAuthor,
    views: 1284,
    likes: 96,
    shares: 31,
    category: "Production & Manufacturing",
    title:
      "Footwear Manufacturers in Nigeria: How to Find the Right Production Partner",
    summary:
      "Looking for a footwear manufacturer in Nigeria? Learn how to assess capability, sampling, quality, capacity, pricing and production reliability before you commit.",
    blocks: [
      h2("What a brand should actually be looking for"),
      p(
        "The right production partner is not simply the person who can make one attractive sample. A brand needs a partner that can repeat quality across sizes and quantities, communicate clearly, source materials consistently, document changes and deliver within an agreed production window. For an emerging brand, reliability matters as much as craftsmanship because missed dates, inconsistent finishing and unclear pricing quickly become customer problems.",
      ),
      h2("Start with your product, not a long list of makers"),
      ul(
        "Define the category first: loafers, corporate shoes, sneakers, slippers, sandals, boots, bags or small leather goods.",
        "Then define the intended customer, price position, target quantity, material direction and launch date.",
      ),
      p(
        "A manufacturer who is strong at hand-finished formal shoes may not be the right partner for white-soled smart-casual sneakers. The search becomes easier when the production requirement is specific.",
      ),
      h2("Six checks before you shortlist a footwear manufacturer in Nigeria"),
      ol(
        "Check relevant product experience;",
        "Sample quality;",
        "Ability to source the specified materials and components;",
        "Realistic capacity;",
        "Process discipline;",
        "And willingness to document price, timeline, revisions and responsibility.",
      ),
      p(
        "Ask to see recent comparable work, not only polished social-media images. Where possible, inspect construction, edge finishing, stitching, lining, sole attachment and consistency across more than one pair.",
      ),
      h2("Why sampling should come before bulk production"),
      p(
        "A sample is where assumptions become visible. It tests shape, materials, fit, construction, colour, branding and manufacturability. A good sample process records what changed between version one and the approved version. Bulk production should start only from an approved reference sample and confirmed specifications.",
      ),
      h2("How to compare quotations properly"),
      p(
        "Do not compare unit price alone. Confirm whether the quotation includes materials, branded components, packaging, sample development, tooling, delivery, taxes and any minimum material purchase. Also confirm what happens when the quantity changes. A cheaper quote that excludes critical items can become more expensive later.",
      ),
      h2("The LEDDAR approach"),
      p(
        "LEDDAR is designed around structured production rather than informal introductions. Brands should be able to move from a clear brief through suitable production partners, sampling, production oversight and documented progress. The objective is simple: reduce guesswork and make production more accountable.",
      ),
      h2("Practical checklist to Find the Right Footwear Production Partner"),
      productionChecklist,
      ...usingLeddar,
      h2("Next steps"),
      p(
        "Start a production request with LEDDAR when you are ready to turn a brief into a managed production process.",
      ),
    ],
  },
  {
    slug: "start-footwear-brand-nigeria",
    author: defaultAuthor,
    views: 962,
    likes: 74,
    shares: 22,
    category: "Building Your Brand",
    title:
      "How to Start a Footwear Brand in Nigeria: From Idea to First Production Run",
    summary:
      "Want to start a footwear brand in Nigeria? Follow a practical path from positioning and design to sampling, costing, production, launch and repeat orders.",
    blocks: [
      h2("Start with a customer, not a logo"),
      p(
        "Define who the product is for, what problem or style need it serves, and the price level you intend to occupy. A footwear brand built for young professionals needs different products, materials and messaging from a streetwear sneaker brand.",
      ),
      h2("Choose a focused first collection"),
      p(
        "Resist launching too many styles. A smaller collection makes sampling, inventory, photography, marketing and customer learning easier. Each style should have a clear role and share enough materials or design language to feel like one brand.",
      ),
      h2("Turn ideas into production-ready information"),
      p(
        "Create sketches, references or technical drawings and define materials, colours, sizes, branding and quantity. The manufacturer cannot price or reproduce an idea consistently if key decisions remain in the founder’s head.",
      ),
      h2("Sample before you sell"),
      p(
        "Use prototypes to test appearance, fit, comfort, construction and price feasibility. Avoid announcing hard launch dates before the product has passed sample approval.",
      ),
      h2("Build the economics before bulk production"),
      p(
        "Calculate production cost, packaging, logistics, payment charges, marketing, returns and margin. Your selling price must support the whole business, not just cover the unit cost.",
      ),
      h2("Launch, learn and reorder"),
      p(
        "The first run should produce information: winning sizes, colours, customer objections, return reasons and demand by style. Use that evidence to improve the second run. A brand becomes stronger when production and customer learning are connected.",
      ),
      h2("Practical checklist to Start a Footwear Brand in Nigeria"),
      brandChecklist,
      ...usingLeddar,
      h2("Next step"),
      p(
        "When you have a clear product direction, submit a production request through LEDDAR to move from idea to sample and production.",
      ),
    ],
  },
  {
    slug: "shoe-manufacturing-cost-nigeria",
    author: defaultAuthor,
    views: 1547,
    likes: 128,
    shares: 47,
    category: "Production & Manufacturing",
    title:
      "How Much Does It Cost to Manufacture Shoes in Nigeria? A Brand Founder’s Guide",
    summary:
      "Understand what determines shoe manufacturing cost in Nigeria, from leather and soles to sampling, quantity, packaging, labour and quality requirements.",
    blocks: [
      h2("There is no responsible single price"),
      p(
        "Two shoes that look similar can have very different production costs. The actual price depends on design complexity, material grade, construction, outsole, hardware, size range, quantity, packaging and the amount of development required. A responsible production partner should ask questions before giving a final figure.",
      ),
      h2("The main cost buckets"),
      p(
        "Think in six buckets: product development and sampling; upper and lining materials; soles and structural components; labour and construction; branding and packaging; logistics and quality control. Some costs are one-time development expenses while others repeat on every unit.",
      ),
      h2("Why quantity changes the unit cost"),
      p(
        "Small runs spread setup, cutting, sourcing and development across fewer units. Larger runs can improve efficiency, but only when the maker has the capacity to maintain quality. Quantity should therefore be selected from expected demand and working capital, not from the lowest unit price available.",
      ),
      h2("How imported inputs affect Nigerian production"),
      p(
        "Even when production is local, some soles, hardware, adhesives, packaging inputs or specialist materials may be linked to foreign-currency pricing. This is one reason quotes can change between sampling and bulk production if materials have not been reserved. Brands should confirm the validity period of a quote and what can trigger a revision.",
      ),
      h2("What to send before asking for a quote"),
      p(
        "Provide a clear product image or drawing, dimensions, material preference, colour, logo placement, quantity, size range, packaging expectation and delivery target. The more complete the brief, the more meaningful the quotation. A vague “how much to make this?” message usually produces a vague answer.",
      ),
      h2("A better way to budget"),
      p(
        "Budget separately for development, first production and contingency. Do not use every naira of available capital on inventory. Leave room for sample corrections, packaging changes, delivery and quality fixes. The cheapest production plan is not always the least expensive after defects and delays are counted.",
      ),
      h2("Practical checklist to Manufacture Shoes in Nigeria"),
      productionChecklist,
      ...usingLeddar,
      h2("Next step"),
      p(
        "Prepare your product, quantity and material direction, then request a structured production assessment through LEDDAR.",
      ),
    ],
  },
  {
    slug: "find-manufacturer-shoe-leather-brand",
    author: defaultAuthor,
    views: 731,
    likes: 58,
    shares: 16,
    category: "Building Your Brand",
    title: "How to Find a Manufacturer for Your Shoe or Leather Goods Brand",
    summary:
      "Looking for a manufacturer for your shoe or leather goods brand? Learn where to search, what to ask, how to sample and how to avoid expensive production mistakes.",
    blocks: [
      h2("Start with a production requirement"),
      p(
        "Before searching, define product category, quantity, materials, size range, target quality, price position and delivery timing. “I need a manufacturer” is too broad to produce a useful shortlist.",
      ),
      h2("Where brands usually search"),
      p(
        "Founders use referrals, industry networks, directories, social platforms, trade events and production marketplaces. Each source can produce strong or weak partners. Discovery is only the first step; verification and sampling matter more.",
      ),
      h2("Shortlist by relevant capability"),
      p(
        "Look for makers who already understand the product category. Ask about sample process, current capacity, material sourcing, minimum order, lead time, quality control, payment terms and experience with repeat production.",
      ),
      h2("Run a paid sample test"),
      p(
        "A paid sample is a practical evaluation of communication and execution. Observe how the production partner handles ambiguity, corrections, deadlines and technical feedback, not only the appearance of the final sample.",
      ),
      h2("Put commercial terms in writing"),
      p(
        "Confirm scope, price, quantity, timeline, approved specifications, payment milestones, quality expectations, defect handling, intellectual property and what happens if either party delays.",
      ),
      h2("Build for repeat orders"),
      p(
        "The best manufacturer is not only the one who can deliver the first batch. Look for a partner whose process can support your next order with less friction, better consistency and clearer records.",
      ),
      h2(
        "Practical checklist to Find a Manufacturer for Your Shoe or Leather Goods Brand",
      ),
      brandChecklist,
      ...usingLeddar,
      h2("Next step"),
      p(
        "LEDDAR exists to make this process more structured by connecting brands with verified production partners and managed production workflows.",
      ),
    ],
  },
  {
    slug: "best-leather-for-shoes",
    author: defaultAuthor,
    views: 618,
    likes: 49,
    shares: 12,
    category: "Materials & Quality",
    title:
      "Best Leather for Shoes: How Brands Should Choose Leather for Footwear",
    summary:
      "Choosing leather for shoes affects durability, comfort, finishing and price. Compare common leather types and learn how brands should select material for each footwear category.",
    blocks: [
      h2("There is no single best leather for every shoe"),
      p(
        "The right choice depends on product type, desired structure, flexibility, climate, price position and intended use. A formal loafer, sandal, sneaker and boot place different demands on the upper and lining.",
      ),
      h2("Full-grain and top-grain leather"),
      p(
        "Full-grain leather retains more of the natural grain and is valued for durability and character. Top-grain leather is more corrected and can provide a smoother, more uniform appearance. Neither label alone guarantees a good finished shoe; tannage, thickness, finishing and construction also matter.",
      ),
      h2("Suede, nubuck and softer leathers"),
      p(
        "Suede and nubuck create texture and a softer visual language but require different care and may react differently to moisture and abrasion. Softer leathers can improve comfort in loafers and linings but may need reinforcement to hold shape.",
      ),
      h2("Match thickness and temper to construction"),
      p(
        "A leather can be high quality and still be wrong for a design. The production team should assess thickness, stiffness, stretch, fold behaviour and surface finish against the pattern and construction method.",
      ),
      h2("Evaluate consistency, not only the swatch"),
      p(
        "A small swatch can look perfect while a production lot reveals shade variation, natural marks or inconsistent thickness. Brands should agree what level of natural variation is acceptable and inspect material lots before cutting where practical.",
      ),
      h2("Choose with the finished customer in mind"),
      p(
        "Start from use case: daily office wear, occasion footwear, travel, casual lifestyle or rugged use. Then balance appearance, comfort, durability, care requirements and target price. Material selection is a commercial decision as much as a design decision.",
      ),
      h2("Practical checklist to Choose Leather for Footwear"),
      ol(
        "Select material against product use, not appearance alone.",
        "Approve physical samples or supplier references.",
        "Record thickness, colour, finish and component specifications.",
        "Test the material or component in a real product sample.",
        "Agree acceptable variation and defect standards.",
        "Check production lots against the approved reference.",
      ),
      ...usingLeddar,
      h2("Next step"),
      p(
        "Bring your material direction and product reference to LEDDAR for a production-readiness assessment.",
      ),
    ],
  },
  {
    slug: "footwear-moq-explained",
    author: defaultAuthor,
    views: 845,
    likes: 67,
    shares: 19,
    category: "Production & Manufacturing",
    title: "Footwear MOQ Explained: How Many Pairs Should Your Brand Produce?",
    summary:
      "What does MOQ mean in footwear manufacturing? Learn why minimums exist, what changes them and how to choose a first production quantity without overstocking.",
    blocks: [
      p(
        "If you are searching for footwear MOQ, the real question is usually bigger than the keyword itself. You are trying to make a production decision with less risk: who to work with, what to prepare, what to approve and how to protect quality, time and cash. This guide breaks the decision into practical steps for an emerging or growing brand, with a focus on what matters before money is committed to production.",
      ),
      h2("What MOQ actually means"),
      p(
        "MOQ is the smallest order a production partner can accept under a defined product specification. It may apply per style, per colour, per material or across an order. Brands should always ask what the quoted MOQ actually covers.",
      ),
      h2("Why manufacturers set minimums"),
      p(
        "Production requires setup, pattern preparation, cutting plans, material purchases, component sourcing, labour scheduling and quality checks. Many suppliers of leather, soles, boxes and hardware also have their own minimums. The maker must combine these constraints into a commercially workable batch.",
      ),
      h2("When a lower MOQ is useful"),
      p(
        "Lower minimums are valuable when a brand is validating a new product, testing demand or launching with limited capital. The trade-off may be a higher unit cost, fewer custom components or a narrower colour range. That can still be the right choice if it reduces inventory risk.",
      ),
      h2("How to choose your first quantity"),
      p(
        "Estimate realistic demand, selling period, cash available, size distribution and reorder speed. Separate what you hope to sell from what you can reasonably move. For an early brand, the ability to reorder a winning style can be more valuable than producing a large first batch.",
      ),
      h2("Questions to ask about MOQ"),
      p(
        "Ask whether the minimum is per style or total order, whether colours can be mixed, how sizes can be split, whether custom soles or hardware change the minimum, and what happens if a material supplier requires more material than the finished product quantity needs.",
      ),
      h2("Use MOQ as a planning tool"),
      p(
        "MOQ should help you structure a commercially sensible production run. Treat it as one part of the decision alongside quality, margin, launch timing and the speed at which the production partner can replenish inventory.",
      ),
      h2("Practical checklist for How Many Pairs Should Your Brand Produce"),
      productionChecklist,
      ...usingLeddar,
      h2("Next step"),
      p(
        "Use LEDDAR to assess whether your intended quantity is commercially workable before committing to a production run.",
      ),
    ],
  },
  {
    slug: "footwear-tech-pack-production-brief",
    author: defaultAuthor,
    views: 502,
    likes: 38,
    shares: 9,
    category: "Production & Manufacturing",
    title:
      "Footwear Tech Pack and Production Brief: What Your Manufacturer Needs Before Quoting",
    summary:
      "A footwear tech pack or production brief turns an idea into manufacturing instructions. Learn the essential information to include before sampling or requesting a quote.",
    blocks: [
      h2("What a production brief does"),
      p(
        "A production brief is the bridge between creative intent and manufacturing. It tells the production partner what the product is, how it should look, what it should be made from and the commercial conditions around the order.",
      ),
      h2("The minimum information"),
      p(
        "Include product category, reference images or drawings, colours, materials, dimensions, branding, construction notes, quantity, size range, packaging and target timing. For footwear, also clarify outsole direction, lining, insole, closures, hardware and comfort expectations.",
      ),
      h2("When you need a full tech pack"),
      p(
        "A detailed tech pack becomes more important as product complexity, volume or number of suppliers increases. It should contain views, measurements, bill of materials, colour references, component information, logo placement, construction instructions and version control.",
      ),
      h2("What not to leave to assumption"),
      p(
        "Do not assume the maker will interpret “premium,” “soft,” “minimal” or “luxury” exactly as you do. Translate subjective language into materials, dimensions, examples and acceptance criteria wherever possible.",
      ),
      h2("How a better brief improves quoting"),
      p(
        "A clear brief allows the production partner to estimate material consumption, labour, components, development work and quantity more accurately. It also makes competing quotations easier to compare because suppliers are pricing the same requirement.",
      ),
      h2("Keep one approved source of truth"),
      p(
        "After sampling begins, maintain one controlled version of the brief. Mark revisions and dates. The approved sample and final specification should be the standard used for bulk production and quality review.",
      ),
      h2(
        "Practical checklist to Creating a Footwear Tech Pack and Production Brief",
      ),
      productionChecklist,
      ...usingLeddar,
      h2("Next step"),
      p(
        "Use this checklist to prepare your brief, then submit it through LEDDAR for production assessment.",
      ),
    ],
  },
  {
    slug: "shoe-makers-lagos-for-brands",
    author: defaultAuthor,
    views: 1096,
    likes: 85,
    shares: 27,
    category: "Craft & Artisans",
    title:
      "Shoe Makers in Lagos for Brands: How to Find the Right Production Partner",
    summary:
      "Searching for shoe makers in Lagos for your brand? Learn how to evaluate craftsmanship, capacity, sampling, quality control and reliability before giving out production.",
    blocks: [
      h2(
        "A good shoe maker for one customer may not be a production partner for a brand",
      ),
      p(
        "Bespoke work and repeat brand production are different. A maker may produce an excellent one-off pair but struggle with size runs, deadlines, repeatability or multiple units. Brands should evaluate both craft and operating discipline.",
      ),
      h2("Define the kind of production you need"),
      p(
        "State category, material, quantity, size range, design status and launch date. This filters out makers who are strong in another type of footwear or whose current capacity is too small.",
      ),
      h2("Inspect comparable work"),
      p(
        "Ask to see recent products similar to yours. Look at stitching, symmetry, edge finishing, sole attachment, lining, internal cleanliness and consistency across multiple pairs.",
      ),
      h2("Test communication during sampling"),
      p(
        "Sampling reveals how the maker receives instructions, documents corrections and manages timing. A technically capable maker who cannot communicate changes clearly can still create major production risk.",
      ),
      h2("Confirm capacity honestly"),
      p(
        "Ask how many units can be completed within the required period without compromising other jobs. Understand whether the maker works alone, manages a team or coordinates subcontractors.",
      ),
      h2("Move from informal trust to structured trust"),
      p(
        "For a brand, trust should be supported by verification, written specifications, approvals, payment milestones, quality checks and documented progress. That is the difference between hoping production works and managing it.",
      ),
      h2("Practical checklist to Find the Right Production Partner"),
      ol(
        "Verify identity, category skill and working setup.",
        "Inspect comparable work.",
        "Use a paid sample and revision test.",
        "Confirm capacity and who will perform the work.",
        "Put material, quantity, price and timeline in writing.",
        "Track quality and delivery performance after each order.",
      ),
      ...usingLeddar,
      h2("Next step"),
      p(
        "Use LEDDAR when you need a more structured route from brand brief to suitable production partners and managed execution.",
      ),
    ],
  },
];
