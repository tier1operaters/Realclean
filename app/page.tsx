
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import ReviewsSection from "./components/ReviewsSection";
import SEOSection from "./components/SEOSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ReviewsSection />
      <SEOSection />
      <Footer />
    </main>
  );
}
