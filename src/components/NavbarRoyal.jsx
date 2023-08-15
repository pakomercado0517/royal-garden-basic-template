import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function NavbarRoyal() {
  return (
    <Navbar fluid rounded className="border shadow-md shadow-black-100">
      <Navbar.Brand href="/">
        <img src={logo} className="w-16 h-16" alt="Hotel logo" />
      </Navbar.Brand>
      <div className="flex ms:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-[#285856]">
        <div className="pr-2">
          <Link to="/about">Acerca de Nostros</Link>
        </div>
        <div className="pr-2">
          <Link to="/events">Eventos</Link>
        </div>
        <div className="pr-2">
          <Link to="/ofertas">Ofertas</Link>
        </div>
        <div className="pr-2">
          <Link to="/reservations">Reservaciones</Link>
        </div>
        <div className="pr-2">
          <Link to="/multimedia">Fotos y videos</Link>
        </div>
        {/* <Navbar.Link>
        </Navbar.Link> */}
        {/* <Navbar.Link>
          <p>Acerca de Nosotros</p>
        </Navbar.Link>
        <Navbar.Link>
          <p>Eventos</p>
        </Navbar.Link>
        <Navbar.Link>
          <p>Reservaciones</p>
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarRoyal;
