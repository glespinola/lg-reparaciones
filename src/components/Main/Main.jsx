
import ServicioTecnico from "../ServicioTecnico/ServicioTecnico";
import Testimonios from "../Testimonios/Testimonios";
import Redes from "../Redes/Redes";
import { Curso } from "../Cursos/Curso";
import './MainStyle.css';


const Main = () => {

  return (
    <div className="main__container">
      <Curso />
      <ServicioTecnico />
      <Testimonios />
      <Redes />
    </div>
  )
}

export default Main