import { Star } from "lucide-react";

/**
 * @param {{ id, name, initials, rating, review }} review
 */
export default function TestimonialCard({ review }) {
  const { name, initials, rating, review: text } = review;

  return (
    <article className="bg-forest-900/50 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-card-hover">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-forest-500 flex items-center justify-center text-forest-900 font-bold text-base shrink-0 border-2 border-white/10">
          {initials}
        </div>

        <div>
          <p className="text-sm font-semibold text-forest-50">{name}</p>
          <div className="flex items-center gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < rating ? "fill-gold text-gold" : "text-forest-600"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-forest-200 leading-relaxed">{text}</p>
    </article>
  );
}
