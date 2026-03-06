export default function ServicesSection() {
  return (
    <section className="py-20 bg-white/80 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <ul className="grid md:grid-cols-2 gap-8 text-xl">
          <li>Residential Window Cleaning</li>
          <li>Commercial Window Cleaning</li>
          <li>High-Rise Glass Cleaning</li>
          <li>Screen Cleaning</li>
          <li>Solar Panel Cleaning</li>
        </ul>
      </div>
    </section>
  );
}