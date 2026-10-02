import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";

/* lucide-react has no TikTok icon */
function TikTok({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/myleddar",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/myleddar",
    label: "LinkedIn",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/myleddar",
    label: "Facebook",
  },
  { Icon: TikTok, href: "https://www.tiktok.com/@myleddar", label: "TikTok" },
];

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
      { label: "Contact Us", href: "mailto:alfred.j@myleddar.com" },
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
            <div className="flex flex-wrap gap-3 mt-5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-[#FBB13A] rounded-full flex items-center justify-center text-white hover:bg-[#361B14] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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
