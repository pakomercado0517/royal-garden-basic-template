import eventImage from "../assets/eventos.jpg";
function Events() {
  return (
    <section className="font-bodoni text-gray-500 lg:h-[65vh]">
      <div>
        <h1 className="text-3xl text-center font-bold my-4">
          Proximos Eventos
        </h1>
      </div>
      <article className="mx-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">Event&apos;s Day</h3>
          <img src={eventImage} alt="events" />
          <p>Event&apos;s name</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">Event&apos;s Day</h3>
          <img src={eventImage} alt="events" />
          <p>Event&apos;s name</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold">Event&apos;s Day</h3>
          <img src={eventImage} alt="events" />
          <p>Event&apos;s name</p>
        </div>
      </article>
    </section>
  );
}

export default Events;
