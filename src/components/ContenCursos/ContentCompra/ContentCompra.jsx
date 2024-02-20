import './ContentCompraStyle.css'
import img1 from '../../../assets/img/ServicioTecnico/phone1.jpg'
import ModalCompra from './ModalCompra/ModalCompra'

const ContentCompra = () => {

  return (
    <div className="content-1">
    <div className="content-1__container card--content--cursos">
      <div className="content-1__img">
        <img src={img1} alt="Imagen Cursos" />
      </div>
      <div className="content-1__compra">
        <div>
          <h1>Curso de Reparacion de Celulares - Nivel Inicial</h1>
          <p className='content-1__stars'>
            4.6 
            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
            (59)
          </p>
        </div>
        <div className="content-1__precio">
          <p>$ 60.000</p>
        <ModalCompra />
        </div>
        <div className="content-1__fechas">
          <h4>Próximas Fechas</h4>
          <ul>
            <li>Lunes 1/4 a Jueves 4/4 de 19:00 a 22:00hs. Modalidad Intensiva. Cuatro Clases en una Semana</li>
            <li>Sabado 6/4 a 27/4 de 13:00hs a 16:00hs o de 17:00hs a 20:00hs. Modalidad Normal. Una Clase por Semana</li>
          </ul>
        </div>
        <div className='content-1__requisitos'>
          <h4>Requisitos</h4>
          <p>No se requieren conocimientos previos. Perfecto para principiantes.</p>
        </div>
        <button className='curso__content--btn'>Comprar este curso</button>
      </div>
    </div>  
  </div>
  )
}

export default ContentCompra