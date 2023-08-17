import { Routes, Route } from "react-router-dom";
import NavbarRoyal from "./components/NavbarRoyal";
import FooterRoyal from "./components/FooterRoyal";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Offers from "./pages/Offers";

function App() {
  return (
    <div>
      <NavbarRoyal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <FooterRoyal />
    </div>
  );
}

export default App;
