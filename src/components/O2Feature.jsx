import Button from "./Button";
import { o2Stats } from "../data/plants";

export default function O2Feature() {
  return (
    <section
      id="o2"
      className="bg-forest-900 py-20 px-5 md:px-8"
      aria-labelledby="o2-heading"
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12
          glass-card px-8 py-14 lg:px-16 lg:py-20"
      >
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=540&q=82&fm=webp"
            alt="Premium O₂ producing plant"
            className="w-full max-w-sm rounded-2xl object-cover shadow-glass"
          />
        </div>

        <div>
          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full mb-4">
            Our Best O₂
          </span>

          <h2
            id="o2-heading"
            className="font-display text-3xl md:text-4xl font-semibold leading-snug text-forest-50 mb-5"
          >
            We Have Great And Best O₂ Plants Collections
          </h2>

          <p className="text-sm text-forest-200 leading-relaxed mb-8">
            Oxygen-producing plants are nature's gift to urban living. Our O₂
            collection features carefully selected species that maximise air
            quality and purification — from classic snake plants to lush pothos.
            Each plant is nurtured to perfection, bringing the best of the
            outdoors into your home, workplace, and every space in between.
          </p>

          <div className="flex gap-8 mb-8">
            {o2Stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-forest-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button href="#top-selling" variant="primary" withArrow>
            Explore Plants
          </Button>
        </div>
      </div>
    </section>
  );
}
