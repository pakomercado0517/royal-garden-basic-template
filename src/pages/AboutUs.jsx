import logo from "../assets/Logo.png";
function AboutUs() {
  return (
    <section className="font-bodoni mt-6 sm:px-8 sm:flex sm:flex-col sm:justify-center lg:flex lg:justify-center mx-auto container rounded-lg bg-beigeLight shadow-xl shadow-beige text-gray-500 text-center">
      <div className="mt-5  lg:w-2/3 lg:pl-12 lg:pt-8">
        <img className="w-24 h-20 md:w-48 md:h-auto" src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-royalGreen font-bold text-center mt-6">
          Acerca de Nosotros
        </h1>
        <article className="w-2/3">
          <p className="text-lg tracking-wider text-start mt-6">
            Bienvenido a{" "}
            <strong className="font-bold text-royalGreen">
              Royal Garden Hotel
            </strong>
            , tu refugio de lujo en el corazón de{" "}
            <strong className="font-bold text-royalGreen">
              Tuxpan, Veracruz
            </strong>
            . Con una historia que se remonta en poco tiempo, pero dedicados a
            brindar experiencias excepcionales a nuestros huéspedes, combinando
            elegancia temporal con comodidades modernas.
          </p>
          <br />
          <h3 className="font-bold text-royalGreen text-xl underline">
            Nuestra Historia
          </h3>
          <p className="text-lg tracking-wider text-start mt-6">
            Fundado en el año del 2022 por Los Fundadores,{" "}
            <strong className="text-royalGreen font-bold">
              Royal Garden Hotel
            </strong>{" "}
            comenzó como un sueño para ofrecer a los viajeros un lugar donde se
            sintieran como en casa, incluso lejos de ella. A lo largo de los
            años, hemos mantenido esa visión mientras crecemos y nos convertimos
            en un destino icónico para viajeros de todo el mundo.{" "}
          </p>
          <br />
          <h3 className="font-bold text-royalGreen text-xl underline">
            Nuestra Misión
          </h3>
          <p className="text-lg tracking-wider text-start mt-6">
            En{" "}
            <strong className="text-royalGreen font-bold">
              Royal Garden Hotel
            </strong>{" "}
            , nuestra misión es proporcionar experiencias memorables que superen
            las expectativas de nuestros huéspedes. Nos esforzamos por ser un
            refugio de tranquilidad y comodidad, donde cada detalle esta
            diseñado para hacer que tu estadía sea inolvidable. Creemos en la
            importancia de brindar un servicio personalizado y una hospitalidad
            sincera.
          </p>
          <br />
          <h3 className="font-bold text-royalGreen text-xl underline">
            Nuestro Equipo
          </h3>
          <p className="text-lg tracking-wider text-start mt-6">
            Detrás de cada sonrisa amable y cada servicio impecable en{" "}
            <strong className="text-royalGreen font-bold">
              Royal Garden Hotel
            </strong>{" "}
            , se encuentra nuestro equipo apasionado y dedicado. Desde nuestros
            expertos en hospitalidad hasta nuestros talentosos chefs y personal
            de limpieza, todos compartimos un objetico común: crear una
            experiencia excepcional para cada huésped que cruza nuestras
            puertas.
          </p>
          <br />
          <h3 className="font-bold text-royalGreen text-xl underline">
            Compromiso con la Excelencia
          </h3>
          <p className="text-lg tracking-wider text-start mt-6">
            En{" "}
            <strong className="text-royalGreen font-bold">
              Royal Garden Hotel
            </strong>{" "}
            , la excelencia es nuestra norma. Desde nuestras lujosas
            habitaciones hasta nuestras instalaciones de vanguardia, nos
            esforzamos por ofrecer calidad en cada rincón. Nuestro excelente
            servicio de restaurante y estancia en la alberca son testimonio de
            nuestra búsqueda constante de la perfección y el deleite de nuestros
            huéspedes.
          </p>
          <br />
          <h3 className="font-bold text-royalGreen text-xl underline">
            Responsabilidad ambiental
          </h3>
          <p className="text-lg tracking-wider text-start mt-6">
            Somos consientes de nuestro impacto en el entorno que nos rodea. Por
            eso en{" "}
            <strong className="text-royalGreen font-bold">
              Royal Garden Hotel
            </strong>{" "}
            , estamos comprometidos con prácticas sostenibles y respetuosas con
            el medio ambiente. Desde la conservación de recursos, hasta el uso
            de ingredientes locales en nuestros menús, nos esforzamos por hacer
            nuestra parte para un mundo mejor.
          </p>
          <br />
          <h3 className="font-bold text-royalGreen text-xl underline">
            Ven y Descubre
          </h3>
          <p className="text-lg tracking-wider text-start mt-6">
            Te invitamos a descubrir la elegancia y el encanto de{" "}
            <strong className="text-royalGreen font-bold">
              Royal Garden Hotel
            </strong>{" "}
            . Ya sea que estés buscando un escape relajante, una experiencia
            gastronómica excepcional o un lugar para celebrar momentos
            especiales, estamos aquí pata hacerte sentir bienvenido y cuidado en
            cada paso del camino.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;
