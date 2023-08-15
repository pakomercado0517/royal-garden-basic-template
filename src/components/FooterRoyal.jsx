import { useState, useEffect } from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TbMap2, TbPhoneCall } from "react-icons/tb";
import logo from "../assets/Logo.png";

function FooterRoyal() {
  const [year, setYear] = useState();

  useEffect(() => {
    const updateYear = () => {
      const newYear = new Date().getFullYear();
      setYear(newYear);
    };
    updateYear();
  }, []);

  return (
    <Footer container className="bg-gray-50 mt-12 font-bodoni">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Royal Garden Hotel Logo"
              href="/"
              name="Royal Garden Hotel"
              src={logo}
            />
          </div>
          {/* <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div> */}
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-items-start">
          <Footer.Copyright by="Royal Garden Hotel™" href="#" year={year} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center md:ml-52">
            <Footer.Icon
              href="https://www.facebook.com/hroyalgardentuxpan"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/hroyalgardentuxpan/"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://goo.gl/maps/mrPBnjRwT7y4cTCs8"
              target="_blank"
              icon={TbMap2}
            />
            <Footer.Icon
              href="callto:+527836882138"
              target="_blank"
              icon={TbPhoneCall}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterRoyal;
