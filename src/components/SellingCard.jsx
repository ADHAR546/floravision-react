import { useState } from "react";
import { Plus, Check } from "lucide-react";

/**
 * @param {{ id, name, description, price, image }} plant
 */
export default function SellingCard({ plant }) {
  const { name, description, price, image } = plant;
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (added) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <article className="bg-forest-800/50 border border-white/10 rounded-2xl p-4 group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-accent/25">
      <div className="h-36 flex items-center justify-center mb-3 rounded-xl overflow-hidden bg-card-radial">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-28 object-contain transition-transform duration-400 group-hover:scale-110"
        />
      </div>

      <h3 className="text-sm font-semibold text-forest-50 mb-1">{name}</h3>
      <p className="text-xs text-forest-400 leading-relaxed mb-3 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-accent">Rs. {price}/-</span>
        <button
          onClick={handleAdd}
          aria-label={added ? "Added to cart" : "Add to cart"}
          className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200
            ${
              added
                ? "bg-forest-400 border-forest-400 text-forest-900"
                : "bg-accent/15 border-accent/30 text-accent hover:bg-accent hover:text-forest-900 hover:border-accent active:scale-90"
            }`}
        >
          {added ? <Check size={13} strokeWidth={3} /> : <Plus size={14} />}
        </button>
      </div>
    </article>
  );
}
