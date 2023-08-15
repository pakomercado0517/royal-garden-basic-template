import roomImage from "../assets/rooms.jpg";
function RoomDescription() {
  return (
    <section
      className="mx-5 lg:container lg:mx-auto text-gray-500 font-bodoni mt-6 gap-9 bg-beige rounded-xl shadow-lg shadow-coronado p-10 flex flex-col-reverse
    lg:flex-row lg:justify-evenly"
    >
      <article className="mb-5 mr-5 flex flex-col lg:justify-center lg:items-center lg:w-1/4">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
          Descubre y conoce nuestras habitaciones.
        </h1>
        <p className="lg:text-lg">
          Bienvenido a{" "}
          <strong className="font-bold text-royalGreen">
            Royal Garden Hotel
          </strong>
          , donde el confort y la elegancia se unen para brindarte una
          experiencia inolvidable. Nuestras habitaciones están diseñadas para
          garantizar tu comodidad y satisfacción durante tu estadía. Ya sea que
          estés aquí por negocios o por placer, nuestras habitaciones ofrecen un
          refugio sereno y relajante después de un día lleno de actividades.
        </p>
      </article>
      <article className="">
        <img src={roomImage} alt="room" />
      </article>
    </section>
  );
}

export default RoomDescription;
