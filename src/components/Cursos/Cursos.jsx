/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './CursosStyle.css'
import scrollToTop from '../../hooks/scrollToTop ';

const Curso = ({ nivel, contenidoCurso,  titleColor, imgCard, link }) => {
  const scrollUp = scrollToTop();
  return (
    <div className="cursos__container">
      <div className="clas">
        <div className="card">
          <div className="card-image"><img className='cursos__img' src={imgCard} alt="Niveles Celulares" /></div>
          <h3 className="card-title" style={{ color: titleColor }}>{nivel}</h3>
          <p className="card-body">{contenidoCurso}</p>
            <Link to={link} onClick={scrollUp} className="curso__content--btn text-center">¡Inscríbete ahora!</Link>
        </div>
      </div>
    </div>
  );
};

export default Curso;
