/* eslint-disable react/no-unknown-property */

import './FooterStyle.css'
import InfoFooter from './components/InfoFooter/InfoFooter'
import Maps from './components/Maps/Maps'
import Newsletter from './components/Newsletter/Newsletter'


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
					<InfoFooter />
				</div>
				<div className="footer-col">
					<Maps />
				</div>
			</div>
				{/* <Newsletter /> */}
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