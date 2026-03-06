import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Parallax effect for hero image and overlay
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const img = document.getElementById("hero-img");
      const overlay = document.getElementById("hero-overlay");
      if (!hero || !img || !overlay) return;
      const scrollY = window.scrollY;
      img.style.transform = `scale(1.08) translateY(${scrollY * 0.18}px)`;
      overlay.style.opacity = `${1 - Math.min(scrollY / 400, 0.4)}`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fade-in animation for hero card
    const card = document.getElementById("hero-card");
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      setTimeout(() => {
        card.style.transition = "opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 200);
    }
  }, []);

  return (
    <section id="hero-section" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        id="hero-img"
        src="/hero1.jpg"
        alt="Professional Window Cleaning"
        fill
        className="object-cover opacity-70 will-change-transform"
        priority
        style={{ transition: "transform 0.7s cubic-bezier(.4,0,.2,1)" }}
      />
      {/* Animated gradient overlay */}
      <div id="hero-overlay" className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-600/60 to-sky-400/40 animate-gradient-move z-0 transition-opacity duration-700" />
      {/* Glassmorphism card */}
      <div id="hero-card" className="glass relative z-10 text-center text-slate-900 px-12 py-10 max-w-2xl mx-auto shadow-2xl" style={{ opacity: 0, transform: "translateY(40px)" }}>
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