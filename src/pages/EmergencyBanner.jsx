import EmergencyBanner from "../components/EmergencyBanner";

const Home = () => (
  <div>
    <EmergencyBanner />
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to NDRF Drone Rescue Unit</h1>
      <p className="text-gray-700 mt-2">
        Real-time tracking and updates of drone-based disaster relief missions.
      </p>
    </div>
  </div>
);

export default Home;
