import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../data/plants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300
          ${scrolled ? "bg-forest-900/90 backdrop-blur-2xl shadow-glass" : "bg-forest-900/70 backdrop-blur-xl"}
          border-b border-white/10`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-[70px]"
          aria-label="Main navigation"
        >
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-forest-200 hover:text-forest-50 transition-colors"
          >
            <Menu size={20} />
          </button>

          <a
            href="#home"
            className="font-display text-xl font-bold text-accent tracking-tight"
          >
            Flora<span className="text-forest-50">Vision</span>
          </a>

          <ul
            className="hidden md:flex items-center gap-8 list-none m-0 p-0"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-forest-200 hover:text-forest-50 transition-colors duration-200
                    after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-accent
                    after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-250"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              aria-label="Search"
              className="w-9 h-9 flex items-center justify-center rounded-full glass text-forest-300 hover:text-forest-50 hover:border-accent/40 transition-all duration-200"
            >
              <Search size={16} />
            </button>

            <button
              aria-label={`Cart — ${cartCount} items`}
              className="relative w-9 h-9 flex items-center justify-center rounded-full glass text-forest-300 hover:text-forest-50 hover:border-accent/40 transition-all duration-200"
            >
              <ShoppingCart size={16} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-forest-900 text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              aria-label="User profile"
              className="w-9 h-9 flex items-center justify-center rounded-full glass text-forest-300 hover:text-forest-50 hover:border-accent/40 transition-all duration-200"
            >
              <User size={16} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
