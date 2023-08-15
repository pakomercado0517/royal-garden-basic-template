import eventImage from "../assets/eventos.jpg";
function EventsDescription() {
  return (
    <section className="mx-5 lg:container flex flex-col-reverse lg:mx-auto m-12 p-20 bg-beigeStrong rounded-lg shadow-lg shadow-beigeStrong text-gray-500 font-bodoni lg:flex-row lg:justify-center lg:items-center">
      <article className="md:flex md:justify-center mt-4">
        <img src={eventImage} alt="eventos" />
      </article>

      <article className="w-full lg:ml-5 lg:px-5 lg:mb-5 lg:w-2/3">
        <h1 className="text-2xl lg:text-3xl text-center font-bold mb-7">
          Eventos Inolvidables en Royal Garden Hotel
        </h1>
        <p className="lg:text-lg">
          En{" "}
          <strong className="font-bold text-royalGreen">
            Royal Garden Hotel
          </strong>
          , estamos comprometidos a convertir tus eventos especiales en
          experiencias memorables. Nuestro versátil y elegante espacio para
          eventos es el escenario perfecto para una variedad de ocasiones, desde
          celebraciones privadas hasta reuniones corporativas. Ya sea que estés
          planeando una boda, una conferencia, una fiesta de aniversario o
          cualquier otro tipo de evento, estamos aquí para hacer que cada
          momento sea excepcional.
        </p>
      </article>
    </section>
  );
}

export default EventsDescription;
