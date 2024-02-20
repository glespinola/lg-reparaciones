import './PersonStyle.css'
import imgPerson from '../../assets/img/Person/laugalvan.jpg'
const Person = () => {
  return (
    <div className="card-person">
      <span>Conoce a tu Profesor</span>
    <img className="img" src={imgPerson}/>
    {/* <span>Sobre Mi</span> */}
    <p className="info">Lautaro Galván, un apasionado por la tecnología y la electrónica, es un instructor comprometido con una sólida experiencia de 5 años en la reparación de celulares. Con un enfoque práctico y educativo, Lautaro comparte su profundo conocimiento para ayudar a sus estudiantes a dominar las complejidades de la tecnología móvil.</p>
    <div className="share">
      <a href=""><i className="fab fa-facebook"></i></a>
      <a href=""><i className="fab fa-instagram"></i></a>
      <a href=""><i className="fab fa-linkedin"></i></a>
    </div>
</div>
  )
}

export default Person