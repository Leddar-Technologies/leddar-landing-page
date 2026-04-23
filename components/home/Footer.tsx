import { footerColumns } from "@/lib/home-data";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(245,166,35,0.15)] bg-cream px-16 pb-6 pt-14 max-lg:px-8 max-lg:pt-12">
      <div className="mb-12 grid grid-cols-[180px_1fr_1fr_1fr_1fr] gap-10 max-lg:grid-cols-2 max-lg:gap-8 max-sm:grid-cols-1">
        <div>
          <a href="#" className="mb-5 flex items-center gap-2 text-[17px] font-extrabold text-dark no-underline">
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-dark text-sm font-black text-cream">^</span>
            leddar
          </a>
          <div className="flex gap-2.5">
            {[
              { label: "in", href: "#" },
              { label: "yt", href: "#" },
              { label: "f", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-sm text-dark transition-transform hover:scale-110"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-[11px] font-extrabold uppercase tracking-[1.5px] text-dark">{column.title}</h3>
            <ul className="list-none">
              {column.links.map((link, index) => (
                <li key={`${column.title}-${link}-${index}`} className="mb-2.5">
                  <a href="#" className="inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-amber">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[rgba(0,0,0,0.08)] pt-5 max-sm:flex-col max-sm:gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.5px] text-stone">Terms and Conditions</span>
        <span className="text-xs font-semibold uppercase tracking-[0.5px] text-stone">2026 Leddar. All Rights Reserved</span>
      </div>
    </footer>
  );
}
