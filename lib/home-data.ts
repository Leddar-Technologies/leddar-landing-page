export const navLinks = [
  "ABOUT",
  "SERVICES",
  "LEARN",
  "RESOURCES",
  "CONTACT",
] as const;

export const heroStats = [
  { number: "203+", label: "Artisans Available" },
  { number: "97%", label: "Higher Productivity" },
  { number: "78%", label: "Job Success Rate" },
] as const;

export const solutionItems = [
  "Submit clear production requests",
  "Get matched with verified artisans",
  "Start with samples when needed",
] as const;

export const metrics = [
  { icon: "check", value: "203+", label: "Active Artisans" },
  { icon: "chart", value: "97%", label: "Higher Productivity", featured: true },
  { icon: "shield", value: "3,120", label: "Project Completed" },
] as const;

export const faqs = [
  {
    q: "What is LEDDAR?",
    a: "LEDDAR is a platform that connects clients with trusted artisans and ensures every project is handled with transparency, structure, and secure payments through an escrow system.",
  },
  { q: "Who is Leddar for?", a: "" },
  { q: "What are the benefits of using a Receipt AI system?", a: "" },
  { q: "Will I get updates during production?", a: "" },
  { q: "What happens after I join the waitlist?", a: "" },
  { q: "What kind of services will be available?", a: "" },
] as const;

export const features = [
  {
    dark: true,
    icon: "check",
    title: "Verified Artisans",
    amber: "",
    desc: "Work with skilled professionals you can trust - no guesswork.",
  },
  {
    icon: "stack",
    title: "Escrow-Backed",
    amber: "Payment",
    desc: "Track your projects, timelines, and deliverables in one place.",
  },
  {
    icon: "signal",
    title: "WhatsApp",
    amber: "Updates",
    desc: "Communicate clearly with artisans without middlemen or confusion.",
  },
  {
    icon: "shield",
    title: "Structured",
    amber: "Workflow",
    desc: "Build trust through ratings, reviews, and performance history.",
  },
] as const;

export const howSteps = [
  {
    icon: "list",
    title: "Submit your request",
    desc: "Share your design, quantity, and timeline.",
  },
  {
    icon: "handshake",
    title: "Get matched",
    desc: "We connect you with the right artisan.",
  },
  {
    icon: "wallet",
    title: "Fund securely",
    desc: "Payments are protected through escrow-backed workflow.",
  },
  {
    icon: "package",
    title: "Stay updated",
    desc: "Get production updates in your dashboard and on WhatsApp.",
  },
] as const;

export const footerColumns = [
  {
    title: "About Us",
    links: ["How It Works", "Download App", "Communication", "Utilities"],
  },
  {
    title: "Inside Stories",
    links: ["Technology", "Real Estate", "Utilities", "Consumer Staples"],
  },
  {
    title: "Help Corner",
    links: ["Materials", "Energy", "Industrials", "Discretionary"],
  },
  {
    title: "Professional",
    links: ["Technology", "Utilities", "Consumer", "Technology"],
  },
] as const;
