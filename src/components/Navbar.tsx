import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Square } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products', hasDropdown: true },
    { label: 'Resources', to: '/resources' },
    { label: 'Policies', to: '/policies' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFF7E9]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#361B14] rounded-md flex items-center justify-center">
              <Square className="w-3.5 h-3.5 text-[#FBB13A]" fill="#FBB13A" />
            </div>
            <span className="font-heading font-bold text-xl text-[#361B14]">leddar</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-[#FBB13A]'
                    : 'text-[#361B14]/80 hover:text-[#361B14]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/artisan"
              className="px-5 py-2.5 bg-white text-[#361B14] font-semibold text-sm rounded-full border border-[#361B14]/10 shadow-sm hover:bg-[#FBB13A] hover:border-[#FBB13A] hover:text-white transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#361B14]"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FFF7E9] border-t border-[#FFE4D4] px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#361B14]/80 hover:text-[#361B14]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/artisan"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 bg-[#361B14] text-white font-semibold text-sm rounded-full text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
