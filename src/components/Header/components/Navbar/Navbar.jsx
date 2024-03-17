import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavbarStyle.css";

const  Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("nav__menu");
  const [toggle, setToggle] = useState("nav__toggler");
  const toggleMenu = () => {
    isMenuOpen === "nav__menu"
    ? setIsMenuOpen("nav__menu nav__active")
    : setIsMenuOpen("nav__menu");

    //Toggle Animation

    toggle === 'nav__toggler'
    ? setToggle('nav__toggler toggle')
    : setToggle('nav__toggler')
  };

  return (
    <nav className="nav">
      <ul className={isMenuOpen}>
        <li className="nav__item"><NavLink to="/"   className="nav__link">Inicio</NavLink></li>
        <li className="nav__item"><a href="#cursos"  className="nav__link">Cursos</a></li>
        <li className="nav__item"><a href="#services"  className="nav__link">Servicio Tecnico</a></li>
        <li className="nav__item"><a href="#contacto"  className="nav__link">Contacto</a></li>
      </ul>
      <div onClick={toggleMenu}className={toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;