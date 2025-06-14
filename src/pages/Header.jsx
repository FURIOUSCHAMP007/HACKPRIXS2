// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">NDRF Drone Rescue</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/team" className="hover:text-yellow-300">Team</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        <Link to="/dashboard" className="hover:text-yellow-300 font-semibold underline">Dashboard</Link> {/* ✅ NEW */}
      </nav>
    </header>
  );
};

export default Header;
