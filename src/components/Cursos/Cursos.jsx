/* eslint-disable react/prop-types */
import './CursosStyle.css'

const Curso = ({ nivel, contenidoCurso,  titleColor, imgCard }) => {
 
  return (
    <div className="cursos__container">
      <div className="clas">
        <div className="card">
          <div className="card-image"><img className='cursos__img' src={imgCard} alt="Niveles Celulares" /></div>
          <h3 className="card-title" style={{ color: titleColor }}>{nivel}</h3>
          <p className="card-body">{contenidoCurso}</p>
            <button className="curso__content--btn">¡Inscríbete ahora!</button>
        </div>
      </div>
    </div>
  );
};

export default Curso;
