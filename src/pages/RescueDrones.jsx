import React from "react";

const RescueDrones = () => {
  return (
    <section style={{ padding: "40px 20px", maxWidth: "960px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#003366", textAlign: "center" }}>
        🚁 Types of Rescue Drones
      </h2>
      <p style={{ fontSize: "1.2rem", textAlign: "center", margin: "20px 0" }}>
        Explore the key drone types deployed by NDRF in various disaster rescue missions across India.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "30px" }}>
        {/* Drone Type 1 */}
        <div style={{ background: "#e6f0ff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ color: "#003366" }}>1. Surveillance Drones</h3>
          <p>
            Equipped with high-resolution cameras, these drones provide real-time aerial views of affected areas for rapid situational assessment.
          </p>
        </div>

        {/* Drone Type 2 */}
        <div style={{ background: "#e6f0ff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ color: "#003366" }}>2. Payload Drones</h3>
          <p>
            Used to deliver essential supplies such as food, water, and medicines to inaccessible locations during disasters.
          </p>
        </div>

        {/* Drone Type 3 */}
        <div style={{ background: "#e6f0ff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ color: "#003366" }}>3. Thermal Imaging Drones</h3>
          <p>
            Deployed during night-time or low-visibility operations to locate trapped individuals using heat signatures.
          </p>
        </div>

        {/* Drone Type 4 */}
        <div style={{ background: "#e6f0ff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ color: "#003366" }}>4. Mapping Drones</h3>
          <p>
            Used to create 2D/3D terrain maps of disaster zones for planning rescue and rehabilitation efforts.
          </p>
        </div>

        {/* Drone Type 5 */}
        <div style={{ background: "#e6f0ff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ color: "#003366" }}>5. Underwater Drones (ROVs)</h3>
          <p>
            Deployed for submerged search operations in flood-affected or riverine areas for submerged victims or structures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RescueDrones;
