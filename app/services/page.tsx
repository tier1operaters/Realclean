import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="pt-32">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}