export default function ContactSection() {
  return (
    <section className="py-20 bg-white/80 text-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="space-y-6">
          <input className="w-full p-3 rounded border" placeholder="Your Name" />
          <input className="w-full p-3 rounded border" placeholder="Email" type="email" />
          <textarea className="w-full p-3 rounded border" placeholder="Message" rows={5} />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}