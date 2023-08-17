import { useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import ModalForm from "./ModalForm";
function NavbarRoyal() {
  const [openModal, setOpenModal] = useState(false);
  const [buttonType, setButtonType] = useState("");

  const handleOpenModal = (type) => {
    setOpenModal(true);
    setButtonType(type);
  };

  const closeModal = () => setOpenModal(false);

  return (
    <>
      <Navbar fluid rounded className="border shadow-md shadow-black-100">
        <Navbar.Brand href="/">
          <img src={logo} className="w-18 h-16" alt="Hotel logo" />
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
            <Link to="/offers">Ofertas</Link>
          </div>
          <div className="pr-2">
            <Dropdown inline label="Reservaciones">
              <div onClick={() => handleOpenModal("whatsapp")}>
                <Dropdown.Item>
                  <BsWhatsapp className="mr-3" /> Whatsapp
                </Dropdown.Item>
              </div>
              <div onClick={() => handleOpenModal("mail")}>
                <Dropdown.Item>
                  <MdOutlineMarkEmailRead className="mr-3" /> Email
                </Dropdown.Item>
              </div>
              <a href="callto:+527836882138">
                <Dropdown.Item>
                  <BsTelephoneOutbound className="mr-3" /> Teléfono
                </Dropdown.Item>
              </a>
            </Dropdown>
          </div>
          <div className="pr-2">
            <Dropdown inline label="Nuestras Redes Sociales">
              <a
                href="https://www.facebook.com/hroyalgardentuxpan"
                target="_blank"
                rel="noreferrer"
              >
                <Dropdown.Item>
                  <BsFacebook className="mr-3" /> Facebook
                </Dropdown.Item>
              </a>
              <a
                href="https://www.instagram.com/hroyalgardentuxpan/"
                target="_blank"
                rel="noreferrer"
              >
                <Dropdown.Item>
                  <BsInstagram className="mr-3" />
                  Instagram
                </Dropdown.Item>
              </a>
            </Dropdown>
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
      <ModalForm
        openModal={openModal}
        closeModal={closeModal}
        buttonType={buttonType}
      />
    </>
  );
}

export default NavbarRoyal;
