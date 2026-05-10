import { ArrowRight } from "lucide-react";

/**
 * @param {'primary'|'outline'} variant
 * @param {boolean} withArrow
 * @param {string}  href
 * @param {string}  className
 */
export default function Button({
  children,
  variant = "primary",
  withArrow = false,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";

  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight size={15} className="shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {inner}
    </button>
  );
}
