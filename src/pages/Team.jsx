import React from "react";

const Team = () => {
  const members = [
    { name: "Faizan Ahmed", role: "Frontend Developer" },
    { name: "Ayesha Khan", role: "UI/UX Designer" },
    { name: "Rahul Verma", role: "Backend Developer" },
    { name: "Sneha Rao", role: "Drone Systems Analyst" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;