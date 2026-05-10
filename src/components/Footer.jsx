import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Leaf,
} from "lucide-react";
import { footerNavLinks, footerUpdateLinks } from "../data/plants";

const socialLinks = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <footer
      id="footer"
      className="bg-forest-800 border-t border-white/10"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Leaf size={18} className="text-accent" />
              <span className="font-display text-xl font-bold text-accent">
                Flora<span className="text-forest-50">Vision</span>
              </span>
            </div>
            <p className="text-sm text-forest-400 leading-relaxed mb-5">
              Your premier destination for indoor plants. We believe every space
              deserves a touch of nature's beauty, carefully curated for you.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full glass text-forest-300 hover:text-forest-900 hover:bg-accent hover:border-accent transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-forest-50 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0" role="list">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-forest-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-forest-50 mb-4">
              For Every Update
            </h3>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0" role="list">
              {footerUpdateLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-forest-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-forest-50 mb-2">
              Newsletter
            </h3>
            <p className="text-xs text-forest-400 leading-relaxed mb-4">
              Plant care tips, exclusive deals, and new arrivals straight to
              your inbox.
            </p>

            <form onSubmit={handleSubscribe} noValidate>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  required
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10
                    text-sm text-forest-50 placeholder-forest-500
                    focus:outline-none focus:border-accent/60 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full
                    bg-accent text-forest-900 hover:bg-accent-hover transition-all duration-200
                    active:scale-90 disabled:opacity-50"
                >
                  <Send size={15} />
                </button>
              </div>

              {submitted && (
                <p className="text-xs text-accent mt-2 flex items-center gap-1">
                  <span>✓</span> Subscribed successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-forest-500">
          <p>© {new Date().getFullYear()} FloraVision. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Leaf size={11} className="text-accent mx-0.5" />
            <span>for nature lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
