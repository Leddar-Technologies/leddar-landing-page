import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

/* `to` is an in-app route, `href` an external or mailto link */
type FooterLink = { label: string; to?: string; href?: string };

const footerLinks: { title: string; links: FooterLink[] }[] = [
  {
    title: "For Brands",
    links: [
      { label: "How It Works", to: "/products" },
      { label: "Start Production", href: "https://brand.myleddar.com/" },
      { label: "Brand Login", href: "https://brand.myleddar.com/login" },
    ],
  },
  {
    title: "For Artisans",
    links: [
      { label: "Join LEDDAR", to: "/about" },
      { label: "How It Works", href: "https://artisan.myleddar.com/signup" },
      { label: "Artisan Login", href: "https://artisan.myleddar.com/login" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Resources", to: "/resources" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", href: "mailto:support@myleddar.com" },
      { label: "Policies", to: "/policies" },
    ],
  },
];

const linkClass =
  "text-sm text-[#361B14]/60 hover:text-[#361B14] transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="bg-[#FFE7BC] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/leddar-logo.svg"
                alt="Leddar"
                className="h-8 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <p className="font-heading font-semibold text-base text-[#361B14] mb-2">
              Production, You Can Trust.
            </p>
            <p className="text-sm text-[#361B14]/60 leading-relaxed max-w-xs">
              Connecting brands with verified artisans for structured,
              accountable production.
            </p>
            <SocialLinks className="mt-5" />
          </div>

          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-xs text-[#361B14] uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to, href }) => (
                  <li key={label}>
                    {to ? (
                      <Link to={to} className={linkClass}>
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className={linkClass}
                        {...(href?.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#FFE4D4] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            to="/termsCondition"
            className="text-xs font-medium text-[#361B14]/60 hover:text-[#361B14] uppercase tracking-widest"
          >
            Terms & Conditions
          </Link>
          <p className="text-xs text-[#361B14]/50">
            © 2026 LEDDAR. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
