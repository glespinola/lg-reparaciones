import { useState } from "react";

import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";

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
        <li className="nav__item"><NavLink to="/cursos"  className="nav__link">Cursos</NavLink></li>
        <li className="nav__item"><NavLink to="/service"  className="nav__link">Servicio Tecnico</NavLink></li>
        <li className="nav__item"><NavLink to="/contacto"  className="nav__link">Contacto</NavLink></li>
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