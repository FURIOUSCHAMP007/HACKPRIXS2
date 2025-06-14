import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;

    const vizContainer = document.getElementById("tableauViz");
    if (vizContainer) {
      vizContainer.appendChild(script);
    }
  }, []);

  return (
    <section id="dashboard" style={{ padding: "40px 0", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", color: "#003366" }}>📊 Emergency Dispatch Dashboard</h2>
      <div
        className="tableauPlaceholder"
        id="viz1749885547575"
        style={{
          position: "relative",
          maxWidth: "100%",
          margin: "40px auto",
        }}
      >
        <noscript>
          <a href="#">
            <img
              alt=" "
              src="https://public.tableau.com/static/images/EM/EMERGENCYDIPATCHERDASHBOARD/Adhoc/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object
          className="tableauViz"
          style={{ display: "none" }}
          id="tableauViz"
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="EMERGENCYDIPATCHERDASHBOARD/Adhoc" />
          <param name="tabs" value="yes" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/EM/EMERGENCYDIPATCHERDASHBOARD/Adhoc/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </section>
  );
};

export default Dashboard;
