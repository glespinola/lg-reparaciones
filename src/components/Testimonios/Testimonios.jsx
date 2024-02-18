import Testimonio from './Testimonio'
/* Img */
import imagenTestimonio1 from '../../assets/img/Testimonios/testimonio1.jfif'
import imagenTestimonio2 from '../../assets/img/Testimonios/testimonio2.jfif'
import imagenTestimonio3 from '../../assets/img/Testimonios/testimonio3.jfif'
import imagenTestimonio4 from '../../assets/img/Testimonios/testimonio4.jfif'

import './TestimoniosStyle.css'



const Testimonios = () => {
  const testimonio1 = {
    name: 'Josue',
    texto: "Excelente servicio y buena venta de artículos, compré un moto g8 plus impecable.",
    imagenTestimonios: imagenTestimonio1
  }
  const testimonio2 = {
    name: 'Jesus',
    texto: "Muy buena atención, buen precio para el arreglo y rápido.",
    imagenTestimonios: imagenTestimonio2
  }
  const testimonio3 = {
    name: 'Matias',
    texto: "Gran experiencia, adquirí habilidades clave para la reparación de celulares.",
    imagenTestimonios: imagenTestimonio3
  }
  const testimonio4 = {
    name: 'Mauro',
    texto: "Mejoré mis conocimientos y ahora puedo solucionar los problemas de mi teléfono fácilmente.",
    imagenTestimonios: imagenTestimonio4
  }

  return (
    <section className="testimonios--container">
      <h1 className='text-center'>Lo que dicen nuestros clientes</h1>
      <div className="testimonios">
        <Testimonio {...testimonio1}/>
        <Testimonio {...testimonio2}/>
        <Testimonio {...testimonio3}/>
        <Testimonio {...testimonio4}/>
      </div>
    </section>
  )
}

export default Testimonios