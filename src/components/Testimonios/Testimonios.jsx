import Testimonio from './components/Testimonio'
/* Img */
import imagenTestimonio1 from '../../assets/img/Testimonios/testimonio1.jfif'
import imagenTestimonio2 from '../../assets/img/Testimonios/testimonio2.jfif'
import imagenTestimonio3 from '../../assets/img/Testimonios/testimonio3.jfif'
import imagenTestimonio4 from '../../assets/img/Testimonios/testimonio4.jfif'
import imagenTestimonio5 from '../../assets/img/Testimonios/testimonio5.jpg'
import imagenTestimonio6 from '../../assets/img/Testimonios/testimonio6.jpeg'
import imagenTestimonio7 from '../../assets/img/Testimonios/testimonio7.jpg'
import imagenTestimonio8 from '../../assets/img/Testimonios/testimonio8.jpg'

import './TestimoniosStyle.css'
import SimpleSlider from '../Slider/Slider'



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
  const testimonio5 = {
    name: 'Galo',
    texto: "¡Increíble! Repararon mi teléfono en un abrir y cerrar de ojos. ¡Altamente recomendado!",
    imagenTestimonios: imagenTestimonio5
  }
  const testimonio6 = {
    name: 'Ana',
    texto: "El mejor servicio de reparación de celulares que he encontrado. ¡Rápido, eficiente y amigable!",
    imagenTestimonios: imagenTestimonio6
  }
  const testimonio7 = {
    name: 'Mariano',
    texto: "Nunca pensé que mi teléfono volvería a funcionar tan bien. Gracias por el excelente servicio.",
    imagenTestimonios: imagenTestimonio7
  }
  const testimonio8 = {
    name: 'Carlos',
    texto: "Confío plenamente en LG Reparaciones para todas mis necesidades de reparación de dispositivos móviles. ¡Impresionante trabajo!",
    imagenTestimonios: imagenTestimonio8
  }

  return (
    <section className="testimonios--container container b-default">
      <div>
        <h2 className='testimonios__title'>Lo que dicen nuestros clientes</h2>
        <p className='testimonios__text'>Descubre lo que nuestros clientes dicen sobre nuestra experiencia en reparación de teléfonos y servicios de atención al cliente. Sus comentarios nos inspiran a seguir mejorando cada día.</p>
      </div>
      <div className="testimonios">
        <SimpleSlider className="testimonios__s">
          <Testimonio {...testimonio1}/>
          <Testimonio {...testimonio2}/>
          <Testimonio {...testimonio3}/>
          <Testimonio {...testimonio4}/>
          <Testimonio {...testimonio5}/>
          <Testimonio {...testimonio6}/>
          <Testimonio {...testimonio7}/>
          <Testimonio {...testimonio8}/>
   
        </SimpleSlider>
      </div>
    </section>
  )
}

export default Testimonios