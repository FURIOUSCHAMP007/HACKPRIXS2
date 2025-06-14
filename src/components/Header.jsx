import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">NDRF Drone Rescue</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/missions">Missions</Link>
      <Link to="/live-feed">Live Feed</Link>
      <Link to="/team">Team</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
