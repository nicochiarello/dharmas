import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={props.clase}>
      <div className=" relative">
        <h1 className=" text-[calc(40px)] ">Dharmas</h1>
        <div>
          <h2 className=" text-[calc(12px)] absolute translate-x-[calc(90%)] -translate-y-[calc(8px)]">
            BY SANDRA PIRO
          </h2>
        </div>
      </div>
      <div className=" ">
        <ul className=" flex text-[calc(20px)] justify-around gap-16 ">
          <Link to={"/"}>
            <li className=" cursor-pointer">Inicio</li>
          </Link>
          <Link to={"/about"}>
            <li className=" cursor-pointer">Sobre mi</li>
          </Link>
          <Link to={"/cursos"}>
            <li className=" cursor-pointer">Cursos</li>
          </Link>
          <Link to={"/calendario"}>
            <li className=" cursor-pointer">Calendario</li>
          </Link>
          <Link to={"/masajes"}>
            <li className=" cursor-pointer">Masajes</li>
          </Link>
          <Link to={"/contacto"}>
            <li className=" cursor-pointer">Contacto</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
