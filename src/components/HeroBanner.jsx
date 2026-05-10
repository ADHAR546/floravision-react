import Button from "./Button";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-[70px]
        bg-hero-radial"
      aria-label="Hero banner"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 18% 72%, rgba(42,102,50,0.28) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full px-5 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        <div>
          <div className="accent-tag mb-5 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Premium Indoor Plants
          </div>

          <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight mb-5 animate-fade-up-1">
            Earth's <span className="text-accent">Exhale</span>
          </h1>

          <p className="text-forest-200 text-base font-light leading-relaxed max-w-md mb-8 animate-fade-up-2">
            Transform your living space with nature's finest. Our curated
            collection of rare and exotic indoor plants brings life, oxygen, and
            serenity into every corner of your home.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up-3">
            <Button href="#top-selling" variant="primary" withArrow>
              Buy Now
            </Button>
            <Button href="#trending" variant="outline">
              Explore
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-10 animate-fade-up-4">
            <div className="text-center">
              <p className="text-xl font-bold text-forest-50">200+</p>
              <p className="text-xs text-forest-400">Plant varieties</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-xl font-bold text-forest-50">12k+</p>
              <p className="text-xs text-forest-400">Happy customers</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="text-xl font-bold text-forest-50">4.9★</p>
              <p className="text-xs text-forest-400">Average rating</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <div className="relative w-full max-w-[460px] animate-float">
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=560&q=82&fm=webp"
              alt="Premium potted Aglaonema plant"
              className="w-full h-auto rounded-3xl object-cover shadow-glass"
            />

            <div className="absolute -bottom-4 -right-8 glass-card px-4 py-3.5 min-w-[155px] shadow-glass">
              <p className="text-xs text-forest-300 mb-0.5">Featured plant</p>
              <p className="text-sm font-semibold text-forest-50">Aglaonema</p>
              <p className="text-base font-bold text-accent mt-0.5">
                Rs. 499/-
              </p>
            </div>

            <div className="absolute -top-4 -left-6 glass-card px-4 py-3 text-center shadow-glass">
              <p className="text-lg font-bold text-accent">98%</p>
              <p className="text-[10px] text-forest-300 leading-tight">
                Air quality
                <br />
                improvement
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce opacity-50">
        <div className="w-px h-8 bg-forest-300" />
        <p className="text-[10px] text-forest-400 tracking-widest uppercase">
          Scroll
        </p>
      </div>
    </section>
  );
}
