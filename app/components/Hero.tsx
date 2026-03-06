import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/hero1.jpg"
        alt="Professional Window Cleaning"
        fill
        className="object-cover opacity-70"
        priority
      />
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-600/60 to-sky-400/40 animate-gradient-move z-0" />
      {/* Glassmorphism card */}
      <div className="glass relative z-10 text-center text-slate-900 px-12 py-10 max-w-2xl mx-auto shadow-2xl">
        <h1 className="text-6xl font-bold font-space-grotesk drop-shadow-lg">Crystal Clear Windows</h1>
        <p className="mt-4 text-xl font-inter">Residential & Commercial Window Cleaning</p>
        <a href="/estimate">
          <button className="mt-6 bg-blue-600 px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-blue-700 transition font-bold tracking-wide">Get Instant Estimate</button>
        </a>
      </div>
      {/* Subtle animated water particles (placeholder) */}
      <div className="particle-bg" />
    </section>
  );
}