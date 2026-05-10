import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/plants";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-forest-800 py-20 px-5 md:px-8"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Testimonials" heading="Customer Review" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
