import { MdFacebook } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer-green flex flex-row justify-between items-center py-10 px-32">
      <div className=" flex gap-36 ">
        <div>
          <p className="font-gabriela text-4xl">Dharmas</p>
          <p className="font-urbanist text-xs ml-20">BY SANDRA PIRO</p>
        </div>
        <div className="flex flex-row gap-32 mr-40 font-urbanist">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>Inicio</li>
            <li>Sobre mí</li>
            <li>Calendario</li>
            <li>Masajes</li>
          </ul>
          <ul className="flex flex-col gap-4 font-semibold">
            <li>Curso 1</li>
            <li>Curso 2</li>
            <li>Curso 3</li>
            <li>Curso 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-gabriela text-xl">Contacto</p>
        <p className="font-urbanist text-base">sandra@email.com</p>
        <div className="flex flex-row gap-8 text-2xl">
          <MdFacebook />
          <FiInstagram />
          <IoLogoLinkedin />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
