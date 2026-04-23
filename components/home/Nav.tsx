import { navLinks } from "@/lib/home-data";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[999] flex h-16 items-center justify-between border-b border-[rgba(245,166,35,0.12)] bg-[rgba(255,243,214,0.92)] px-16 backdrop-blur-xl max-lg:px-8">
      <a href="#" className="flex items-center gap-2 text-lg font-extrabold text-dark no-underline">
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-dark text-sm font-black text-cream">^</span>
        leddar
      </a>

      <ul className="flex list-none items-center gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="flex items-center gap-1 text-[13px] font-semibold tracking-[0.3px] text-dark transition-colors hover:text-amber"
            >
              {link}
              {link === "SERVICES" ? <span className="text-[9px] opacity-60">v</span> : null}
            </a>
          </li>
        ))}
      </ul>

      <button className="rounded-full border-[1.5px] border-dark bg-transparent px-[22px] py-[9px] text-xs font-bold uppercase tracking-[0.5px] text-dark transition-all hover:bg-dark hover:text-cream">
        JOIN THE WAITLIST
      </button>
    </nav>
  );
}
