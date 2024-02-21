/* eslint-disable react/prop-types */
import './ContentCompraStyle.css'
import img1 from '../../../assets/img/ServicioTecnico/phone1.jpg'
import ModalCompra from './ModalCompra/ModalCompra'

const ContentCompra = ({nivel, fechas, requisitos, precio}) => {

  return (
    <div className="content-1">
    <div className="content-1__container card--content--cursos">
      <div className="content-1__img">
        <img src={img1} alt="Imagen Cursos" />
      </div>
      <div className="content-1__compra">
        <div>
          <h1>Curso de Reparacion de Celulares - Nivel {nivel}</h1>
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
          <p>$ {precio}</p>
        <ModalCompra />
        </div>
        <div className="content-1__fechas">
          <h4>Próximas Fechas</h4>
          <ul>
            {fechas.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className='content-1__requisitos'>
          <h4>Requisitos</h4>
          {/* <p>No se requieren conocimientos previos. Perfecto para principiantes.</p> */}
          <p>{requisitos}</p>
        </div>
        <button className='curso__content--btn'>Comprar este curso</button>
      </div>
    </div>  
  </div>
  )
}

export default ContentCompra