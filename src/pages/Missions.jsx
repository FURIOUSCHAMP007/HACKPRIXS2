import React from "react";
import { missions } from "../data/missions";
import DroneCard from "../components/DroneCard";

const Missions = () => {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-4">
      {missions.map((mission) => (
        <DroneCard key={mission.id} mission={mission} />
      ))}
    </div>
  );
};

export default Missions;