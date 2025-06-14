import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RescueDrones from "./pages/RescueDrones";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drones" element={<RescueDrones />} /> {/* ✅ New Route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
