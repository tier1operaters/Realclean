export default function ReviewsSection() {
  return (
    <section className="py-20 bg-slate-100 text-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Google Reviews</h2>
        <div className="text-3xl text-yellow-400 mb-2">★★★★★ 4.9 Rating</div>
        <div className="text-lg mb-4">200+ Happy Clients</div>
        <div className="flex flex-col gap-4">
          <blockquote className="bg-white p-4 rounded shadow">“Windows have never looked better. Fast, friendly, and professional!”</blockquote>
          <blockquote className="bg-white p-4 rounded shadow">“Highly recommend Real Clean for any window cleaning needs.”</blockquote>
        </div>
      </div>
    </section>
  );
}