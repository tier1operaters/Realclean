import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "./ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="pt-32">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}