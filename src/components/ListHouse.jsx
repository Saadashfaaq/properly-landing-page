import PropertyCaroursel from "./property/PropertyCarousel";

export default function ListHouse() {
  return (
    <section id="portfolio" className="pt-5">
      <div className="container-page">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h5 className="text-4xl font-md text-black tracking-tight">
            Upgrade Your Model.
          </h5>

          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Enchance your model with pre-designd add-ons like the Base Deck and
            the Base Deck+. Additional items are also available through key
            partnerships.
          </p>
        </div>

        <PropertyCaroursel></PropertyCaroursel>
      </div>
    </section>
  );
}
