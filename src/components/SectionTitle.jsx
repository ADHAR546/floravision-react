/**
 * @param {string} label
 * @param {string} heading
 * @param {string} align
 */
export default function SectionTitle({ label, heading, align = "center" }) {
  const alignClass =
    align === "left" ? "text-left" : "text-center items-center";

  return (
    <div className={`flex flex-col mb-12 ${alignClass}`}>
      {label && (
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-1.5">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-forest-50">
        {heading}
      </h2>
      <div
        className={`w-12 h-0.5 bg-accent rounded-full mt-3 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
