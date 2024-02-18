import './HeroStyles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1>Descubre Nuestros Cursos y Servicio Técnico de Calidad</h1>
        <p>Conviértete en un experto en reparación de celulares o deja que nosotros cuidemos de tu dispositivo.</p>
        <a href="#cursos" className="cta-button">Explorar Cursos</a>
      </div>
    </section>
  )
}

export default Hero