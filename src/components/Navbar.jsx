import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#e7d7c9] text-black px-6 py-4 shadow-sm flex justify-between items-center">
      <div className="font-bold text-lg">
        <Link to="/">Toko Kit SG</Link>
      </div>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/login" className="font-semibold underline">
          Login
        </Link>
      </div>
    </nav>
  );
}
