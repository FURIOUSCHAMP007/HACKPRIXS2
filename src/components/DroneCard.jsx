const DroneCard = ({ mission }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-bold">{mission.name}</h2>
    <p>Location: {mission.location}</p>
    <p>Status: <strong>{mission.status}</strong></p>
  </div>
);

export default DroneCard;
