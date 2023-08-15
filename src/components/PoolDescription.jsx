import poolImage from "../assets/alberca.jpg";
function PoolDescription() {
  return (
    <section
      className="mx-5 lg:container lg:mx-auto text-gray-500 font-bodoni mt-6 gap-9 bg-beigeLight rounded-xl shadow-lg shadow-coronado p-10 flex flex-col-reverse
    lg:flex-row lg:justify-evenly"
    >
      <article className="mb-5 mr-5 flex flex-col lg:justify-center lg:items-center lg:w-1/4">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
          Sumergete en la Relajación de nuestra Alberca Exclusiva.
        </h1>
        <p className="lg:text-lg">
          En{" "}
          <strong className="font-bold text-royalGreen">
            Royal Garden Hotel
          </strong>
          , donde el lujo y la comodidad se unen para ofrecerte una experiencia
          vacacional única. Te invitamos a explorar nuestra magnifica alberca,
          un oasis de tranquilidad y diversión que te espera para relajarte y
          disfrutar al máximo.
        </p>
      </article>
      <article className="lg:w-2/3">
        <img src={poolImage} alt="pool" />
      </article>
    </section>
  );
}

export default PoolDescription;
