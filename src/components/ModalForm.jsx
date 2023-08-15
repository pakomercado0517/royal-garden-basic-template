import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import ReservationForm from "./ReservationForm";
import { SiWhatsapp } from "react-icons/si";
import { TbMailStar } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
function ModalForm({ openModal, closeModal, buttonType }) {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const buttonCreator = () => {
    if (buttonType === "mail") {
      return (
        <Button>
          <a
            href={`mailto:reservaciones@hotelroyalgarden.mx?subject=Consulta%20de%20reservaci%C3%B3n%20desde%20la%20Web&body=Hola%2C%20solicito%20informaci%C3%B3n%20acerca%20de%20su%20servicio%20de%3A%0D%0A%0D%0A-%20Servicio%3A%20${data.service}%0D%0A-%20Fecha%3A%20${data.date}%0D%0A%0D%0ADejo%20mi%20n%C3%BAmero%20de%20tel%C3%A9fono%20para%20que%20por%20ese%20medio%20tambi%C3%A9n%20se%20me%20pueda%20ser%20contactado%20para%20recibir%20la%20informaci%C3%B3n%20que%20requiero.%20${data.phone_number}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <TbMailStar className="mr-3" />
            Enviar Email
          </a>
        </Button>
      );
    }
    if (buttonType === "whatsapp") {
      return (
        <Button>
          <a
            href={`https://api.whatsapp.com/send?phone=5217831363072&text=Hola%2C%20solicito%20informaci%C3%B3n%20acerca%20de%3A%0A-%20Servicio%3A%20${data.service}%0A-%20Fecha%3A%20${data.date}%0ADejo%20mi%20n%C3%BAmero%20de%20tel%C3%A9fono%20para%20que%20por%20ese%20medio%20tambi%C3%A9n%20se%20me%20pueda%20ser%20contactado%20para%20recibir%20la%20informaci%C3%B3n%20que%20requiero.%20${data.phone_number}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <SiWhatsapp className="mr-3" />
            Enviar Whatsapp
          </a>
        </Button>
      );
    }
  };

  return (
    <section>
      <Modal show={openModal === true} onClose={closeModal}>
        <Modal.Header>Proporciona algunos datos para Reservar</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <ReservationForm handleChange={handleChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>{buttonCreator()}</Modal.Footer>
      </Modal>
    </section>
  );
}

export default ModalForm;
