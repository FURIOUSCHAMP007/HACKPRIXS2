import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Welcome to NDRF Drone Rescue
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Monitor, manage, and coordinate real-time drone operations for disaster response.
      </p>
      <Link
        to="/stats"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
      >
        📊 View Rescue Stats
      </Link>
    </div>
  );
}
