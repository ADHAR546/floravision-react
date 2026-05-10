import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

/**
 * @param {{ id, name, subtitle, description, price, image, badge }} plant
 */
export default function PlantCard({ plant }) {
  const { name, subtitle, description, price, image, badge } = plant;
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (added) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-accent/30">
      <div className="relative h-52 flex items-center justify-center bg-card-radial overflow-hidden">
        {badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-wider uppercase bg-accent text-forest-900 px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-forest-400 font-medium uppercase tracking-wider mb-1">
          {subtitle}
        </p>
        <h3 className="text-base font-semibold text-forest-50 mb-2">{name}</h3>
        <p className="text-sm text-forest-300 leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent">Rs. {price}/-</span>
          <button
            onClick={handleAdd}
            aria-label={added ? "Added to cart" : "Add to cart"}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
              ${
                added
                  ? "bg-forest-400 text-forest-900 scale-110"
                  : "bg-accent text-forest-900 hover:bg-accent-hover hover:scale-110 active:scale-95"
              }`}
          >
            {added ? (
              <Check size={16} strokeWidth={3} />
            ) : (
              <ShoppingCart size={15} />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
