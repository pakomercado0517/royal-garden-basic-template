import offerImage from "../assets/oferta.jpg";
function Offers() {
  return (
    <section className="font-bodoni text-gray-500 lg:h-[65vh]">
      <div>
        <h1 className="text-3xl text-center font-bold mt-4">
          Aprovecha de nuestras ofertas
        </h1>
        <h3 className="text-xl text-center font-bold mb-8">
          Solo por tiempo limitado
        </h3>
      </div>
      <article className="mx-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col items-center">
          <img src={offerImage} alt="offer" />
          <p>Offer&apos;s name</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={offerImage} alt="offer" />
          <p>Offer&apos;s name</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={offerImage} alt="offer" />
          <p>Offer&apos;s name</p>
        </div>
      </article>
    </section>
  );
}

export default Offers;
