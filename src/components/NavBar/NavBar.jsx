import { useState } from 'react';
import LogoImg from '../../assets/img/Logo/logo1.png';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
      <div className="nav__container container">
        <Link to="/" className="nav__brand">
          <img src={LogoImg} alt="Logo LG Reparaciones"  className='nav__img'/>
          <h1 className='nav__title'>LG Reparaciones</h1>
        </Link>
      <ul className={isMenuOpen}>
        <li className="nav__item"><a href="/"   className="nav__link">Inicio</a></li>
        <li className="nav__item"><a href="#cursos"  className="nav__link">Cursos</a></li>
        <li className="nav__item"><a href="#service"  className="nav__link">Servicio Tecnico</a></li>
        <li className="nav__item"><a href="#contacto"  className="nav__link">Contacto</a></li>
      </ul>
      <div onClick={toggleMenu}className={toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
