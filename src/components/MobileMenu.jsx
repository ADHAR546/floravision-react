import { X } from "lucide-react";
import { navLinks } from "../data/plants";

/**
 * @param {boolean}  isOpen
 * @param {Function} onClose
 */
export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-forest-900/60 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-forest-800/95 backdrop-blur-2xl border-r border-white/10
          flex flex-col transition-transform duration-350 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display text-xl font-bold text-accent">
            Flora<span className="text-forest-50">Vision</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-forest-300 hover:text-forest-50 hover:bg-white/10 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-base text-forest-200 font-medium px-4 py-3.5 rounded-xl border-b border-white/5 transition-all duration-200 hover:text-accent hover:bg-accent/8 hover:border-accent/20"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto px-6 py-6 border-t border-white/10">
          <a
            href="#top-selling"
            onClick={onClose}
            className="btn-primary w-full justify-center text-center"
          >
            Shop Now
          </a>
        </div>
      </aside>
    </>
  );
}
