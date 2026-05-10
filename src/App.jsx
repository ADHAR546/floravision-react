import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import TrendingPlants from "./components/TrendingPlants";
import TopSelling from "./components/TopSelling";
import Testimonials from "./components/Testimonials";
import O2Feature from "./components/O2Feature";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-forest-900">
      <Navbar />
      <main>
        <HeroBanner />
        <TrendingPlants />
        <TopSelling />
        <Testimonials />
        <O2Feature />
      </main>
      <Footer />
    </div>
  );
}
