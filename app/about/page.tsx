import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "./AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="pt-32">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}