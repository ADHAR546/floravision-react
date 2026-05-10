import HeroBanner from "../components/HeroBanner";
import TrendingPlants from "../components/TrendingPlants";
import TopSelling from "../components/TopSelling";
import Testimonials from "../components/Testimonials";
import O2Feature from "../components/O2Feature";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroBanner />
      <TrendingPlants />
      <TopSelling />
      <Testimonials />
      <O2Feature />
    </main>
  );
}
