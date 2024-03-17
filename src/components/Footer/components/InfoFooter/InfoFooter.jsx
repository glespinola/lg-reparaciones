import './InfoFooterStyle.css';

const InfoFooter = () => {
  return (
    <>
      <h4>Contacto</h4>
      <ul>
        <li><a href="mailto:lgxreparaciones@gmail.com">E-mail: lgxreparaciones@gmail.com</a></li>
        <li><a href="tel:+5491160348107">Telefono: +54 9 11 6034-8107</a></li>
      </ul>
      <div className='horarios' >
        <h4>Horarios</h4>
        <p>Lunes a Viernes</p>
        <p>10:00 AM a 10:00 PM</p>
        <p>Sabados</p>
        <p>12:00 AM a 18:00 PM</p>
      </div>
      <div className="social-links">
        <h4>Redes Sociales</h4>
        <a href="https://www.facebook.com/LGxREPARACIONES"rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/lgreparaciones/"rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCSdOKlTRLoVCcg6SHtkv7oA"rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube"></i></a>
        <a href="https://wa.me/+5491160348107"rel="noopener noreferrer" target="_blank"><i className="fab fa-whatsapp"></i></a>
      </div>
    </>
  )
}
export default InfoFooter