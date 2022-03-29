import { Link } from "react-router-dom";

const NavbarPages = () => {
    return (
        <nav className="navbar-pages drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10 py-4 fixed w-full">
            <div className="text-center">
                <p className="text-4xl font-gabriela m-0 pt-5">Dharmas</p>
                <p className="pl-12 font-urbanist m-0">by sandra pino</p>
            </div>
            <ul className="flex flex-row justify-center gap-20 align-center font-gabriela text-xl py-4 ">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Sobre mí</Link>
                </li>
                <li>
                    <Link to="/cursos">Cursos</Link>
                </li>
                <li>
                    <Link to="/calendario">Calendario</Link>
                </li>
                <li>
                    <Link to="/masajes">Masajes</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarPages;
