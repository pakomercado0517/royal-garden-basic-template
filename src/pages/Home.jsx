import { useState } from "react";
import RoomDescription from "../components/RoomDescription";
import EventsDescription from "../components/EventsDescription";
import WhatsappButton from "../components/WhatsappButton";
import MailButton from "../components/MailButton";
import WelcomeComponent from "../components/WelcomeComponent";
import ModalForm from "../components/ModalForm";
import PoolDescription from "../components/PoolDescription";
import EventsComponent from "../components/EventsComponent";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [buttonType, setButtonType] = useState("");

  const handleOpenModal = (type) => {
    setOpenModal(true);
    setButtonType(type);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <section className="">
      <WelcomeComponent />
      <article className="mt-10 rounded-lg bg-coronado shadow-lg shadow-beige container mx-auto">
        <EventsComponent />
      </article>
      <RoomDescription />
      <EventsDescription />
      <PoolDescription />
      <div
        className="fixed right-8 bottom-8"
        onClick={() => handleOpenModal("mail")}
      >
        <MailButton />
      </div>
      <div
        className="fixed right-8 bottom-28"
        onClick={() => handleOpenModal("whatsapp")}
      >
        <WhatsappButton />
      </div>
      <ModalForm
        openModal={openModal}
        closeModal={handleCloseModal}
        buttonType={buttonType}
      />
    </section>
  );
}

export default Home;
