// src/pages/Stats.jsx
import React from "react";

const Stats = () => {
  const stats = [
    { label: "Total Missions", value: 128 },
    { label: "Active Drones", value: 42 },
    { label: "Rescue Teams", value: 23 },
    { label: "Successful Rescues", value: 389 },
    { label: "Alerts Issued", value: 76 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        📊 Rescue Operations Statistics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg text-center border border-blue-100"
          >
            <h2 className="text-xl font-semibold text-blue-700">{stat.label}</h2>
            <p className="text-3xl font-bold text-blue-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
