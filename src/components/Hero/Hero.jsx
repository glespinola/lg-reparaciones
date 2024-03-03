import './HeroStyle.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className='hero__title'>Descubre Nuestros Cursos y Servicio Técnico de Calidad</h1>
        <p className='hero__text'>Conviértete en un experto en reparación de celulares o deja que nosotros cuidemos de tu dispositivo.</p>
        <div className="hero__btn">
          <button><span className='b-default'>Explorar Cursos</span></button>
          <button><span className='b-default'>Servicio Tecnico</span></button>
        </div>
      </div>
    </section>
  )
}
export default Hero