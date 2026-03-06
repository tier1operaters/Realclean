import EstimateForm from "../components/EstimateForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EstimatePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="pt-32">
        <EstimateForm />
      </div>
      <Footer />
    </main>
  );
}