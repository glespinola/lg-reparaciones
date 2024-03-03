/* eslint-disable react/prop-types */
import "./CoursesBoxStyle.css"
import { Link } from "react-router-dom"

const CoursesBox = ({nivel, text, img, link}) => {
  return (
    <div className="box">
     <div className="card">
      <div className="card-image">
        <img className="cursos__img" src={img} alt="Niveles Celulares"/>
      </div>
        <h3 className="card-title">{nivel}</h3>
        <p className="card-body">{text}</p>
        <Link className="curso__content--btn text-center t-400" to={link}>¡Inscríbete ahora!</Link>
      </div>
    </div>
  )
}
export default CoursesBox