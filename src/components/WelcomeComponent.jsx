import welcomePhoto from "../assets/Hotelphoto_fixed.jpg";

function WelcomeComponent() {
  return (
    <section>
      <article>
        <img
          className="w-full h-[88vh] relative"
          src={welcomePhoto}
          alt="hotel photo presentation"
        />
      </article>
      <article className="absolute top-56">
        <div className="w-screen flex justify-center items-center flex-col">
          <h1 className="text-coronado font-bold tracking-widest text-6xl font-bodoni text-center ">
            Royal Garden Hotel
          </h1>
          <p className="text-center text-beigeStrong text-lg tracking-widest mt-5">
            Tuxpan Veracruz, México.
          </p>
        </div>
      </article>
    </section>
  );
}

export default WelcomeComponent;
