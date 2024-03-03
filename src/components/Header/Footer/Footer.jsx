/* eslint-disable react/no-unknown-property */
/* eslint-disable no-mixed-spaces-and-tabs */
import './FooterStyle.css'


const Footer = () => {
  return (
    <footer className="footer" id="contacto">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Sobre Nosotros</h4>
          <p>En nuestro centro especializado nos dedicamos con pasión a la reparación y venta de componentes para celulares. Además, ofrecemos cursos de reparación para aquellos que desean aprender y dominar las habilidades necesarias en este campo en constante evolución. Confía en nosotros para cuidar tus dispositivos móviles y maximizar su rendimiento.</p>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contacto</h4>
          <ul>
  	 				<li><a href="mailto:lgxreparaciones@gmail.com">E-mail: lgxreparaciones@gmail.com</a></li>
  	 				<li><a href="tel:+5491160348107">Telefono: +54 9 11 6034-8107</a></li>
  	 			</ul>
  	 			<h4>Redes Sociales</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/LGxREPARACIONES"rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://www.instagram.com/lgreparaciones/"rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
  	 				<a href="https://www.youtube.com/channel/UCSdOKlTRLoVCcg6SHtkv7oA"rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube"></i></a>
  	 				<a href="https://wa.me/+5491160348107"rel="noopener noreferrer" target="_blank"><i className="fab fa-whatsapp"></i></a>
  	 			</div>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>LG Reparaciones</h4>
          <iframe className='footer-maps text' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13075.349178502633!2d-58.3831004!3d-34.98574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2d895e6d9ff5%3A0x7bfdf6b3e4591e53!2sLG%20REPARACI%C3%93NES!5e0!3m2!1ses-419!2sar!4v1707437894764!5m2!1ses-419!2sar" style={{border: 0, borderRadius: 5, width: '100%', maxWidth: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  	 		</div>
  	 		</div>
{/*   	 		<div className="footer-new">
          <div class="footer-container-new">
            <h3>Newsletter</h3>
            <p>
              Suscríbete a nuestro newsletter para recibir noticias y promociones.
            </p>
            <form class="newsletter__form text-center">
              <div class="inputbox">
                <input required="required" type="email" />
                <span>Username</span>
                <i></i>
                </div>
              <button type="submit">Suscribirse</button>
            </form>
        </div>
  	 	</div> */}
  	 </div>
			<div className='text-center'>
				<p className='p-copy'>Todos los derechos revervados - Copyright © 2024 LG Reparaciones</p>
			</div>
		 <div className="creator text-center">
			
			<p>Made with ❤️ by <a href="http://github.com/glespinola" target='_blank' rel='noreferrer'>glespinola</a></p>
		 </div>
  </footer>


  )
}

export default Footer