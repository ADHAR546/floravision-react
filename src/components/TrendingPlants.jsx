import SectionTitle from "./SectionTitle";
import PlantCard from "./PlantCard";
import { trendingPlants } from "../data/plants";

export default function TrendingPlants() {
  return (
    <section
      id="trending"
      className="bg-forest-800 py-20 px-5 md:px-8"
      aria-labelledby="trending-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Featured Collection" heading="Our Trendy Plants" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trendingPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
