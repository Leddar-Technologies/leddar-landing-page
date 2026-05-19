import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  "About Us": ["How it Works", "Download App", "Communication", "Utilities"],
  "Inside Stories": [
    "Technology",
    "Real Estate",
    "Utilities",
    "Consumer Staples",
  ],
  "Help Corner": ["Materials", "Energy", "Industrials", "Discretionary"],
  Professional: ["Technology", "Utilities", "Consumer", "Technology"],
};

export default function Footer() {
  return (
    <footer className="bg-[#FFF7E9] border-t border-[#FFE4D4] pt-16 pb-8">
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
            <div className="flex gap-3 mt-4">
              {(
                [
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
                  {
                    Icon: Twitter,
                    href: "https://www.x.com/myleddar",
                    label: "X",
                  },
                ] as const
              ).map(({ Icon, href, label }, i) => (
                <a
                  key={i}
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

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-xs text-[#361B14] uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#361B14]/60 hover:text-[#361B14] transition-colors duration-200 flex items-center gap-1"
                    >
                      {item}
                      {item === "Energy" ||
                      item === "Utilities" ||
                      item === "How it Works" ||
                      item === "Technology" ? (
                        <span className="text-[10px] text-[#361B14]/40">›</span>
                      ) : null}
                    </a>
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
