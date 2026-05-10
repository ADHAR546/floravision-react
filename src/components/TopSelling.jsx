import SectionTitle from "./SectionTitle";
import SellingCard from "./SellingCard";
import Button from "./Button";
import { topSellingPlants } from "../data/plants";

export default function TopSelling() {
  return (
    <section
      id="top-selling"
      className="bg-forest-900 py-20 px-5 md:px-8"
      aria-labelledby="top-selling-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Best Sellers" heading="Our Top Selling Plants" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topSellingPlants.map((plant) => (
            <SellingCard key={plant.id} plant={plant} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="#" variant="outline">
            View All Plants
          </Button>
        </div>
      </div>
    </section>
  );
}
