export default function Navbar() {
  return <nav className="w-full py-4 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50">
    <div className="font-bold text-2xl text-blue-800">Real Clean</div>
    <div className="space-x-6">
      <a href="/" className="hover:underline">Home</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/estimate" className="hover:underline">Estimate</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </div>
  </nav>;
}