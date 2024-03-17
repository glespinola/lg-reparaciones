import CoursesBox from "./components/CoursesBox/CoursesBox"
import "./CoursesStyle.css"
import nivel1 from "../../assets/img/Cursos/Niveles/nivel1.jpg"
import nivel2 from "../../assets/img/Cursos/Niveles/nivel2.jpg"
import nivel3 from "../../assets/img/Cursos/Niveles/nivel12.jpg"

const CardCourses = () => {

const nivelUno = {
  nivel: 'Nivel 1 - Inicial',
  img: nivel1,
  text: 'En este curso, exploraremos el funcionamiento y la estructura de los teléfonos móviles. Adquirirás habilidades clave para convertirte en un experto en reparación, abordando diversos aspectos fundamentales del dispositivo.',
  link: '/curso-inicial',
};

const nivelDos = {
  nivel: 'Nivel 2 - Intermedio',
  img: nivel2,
  text: 'En este curso avanzado, exploraremos en detalle la composición interna de los dispositivos móviles. Obtendrás conocimientos fundamentales y habilidades especializadas para enfrentar desafíos más complejos en la reparación de teléfonos.',
  link: '/curso-intermedio',
};

const nivelTres = {
  nivel: 'Nivel 3 - Avanzado',
  img: nivel3,
  text: 'Explora a fondo la estructura interna de los teléfonos móviles y adquiere habilidades avanzadas para su reparación. Desde componentes esenciales hasta técnicas especializadas, este curso te preparará para enfrentar desafíos complejos.',
  link: '/curso-avanzado',
};

  return (
    <section className="courses container" id="cursos">
      <h2 className="courses__title">Explora nuestros cursos</h2>
      <div className="courses__container">
        <div className="courses__box--container">
          <CoursesBox {...nivelUno}/>
          <CoursesBox {...nivelDos}/>
          <CoursesBox {...nivelTres}/>
        </div>
      </div>
    </section>
  )
}
export default CardCourses