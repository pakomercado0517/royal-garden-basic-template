import { Routes, Route } from "react-router-dom";
import NavbarRoyal from "./components/NavbarRoyal";
import FooterRoyal from "./components/FooterRoyal";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavbarRoyal />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterRoyal />
    </div>
  );
}

export default App;
