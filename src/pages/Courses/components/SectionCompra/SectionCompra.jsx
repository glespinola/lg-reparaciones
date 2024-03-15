import './SectionCompraStyle.css';
import CursoImg from '../../../../assets/img/Cursos/Niveles/nivel2.jpg'
import ModalCompra from './components/ModalCompra/ModalCompra';

const SectionCompra = () => {
  return (
  <>
    <div className="grid-compra">
      <div className="parent1">
        <div className="space-y-4">
          <h1 className="">Phone Repair Mastery</h1>
          <p className="b-default">
            Learn to fix your phone like a pro. This comprehensive course will teach you everything you need to know
            about buying, repairing, and maintaining your smartphone. Whether you&apos;re an enthusiast looking to upgrade
            your skills or a professional aiming to start your repair business, this course has you covered.
          </p>
        </div>
        <div className="space-y">
          <div className="flex">
            <i className="fa fa-calendar"></i>
            Fechas
          </div>
          <div className="flex">
            <i className="fa fa-clock"></i>
            2-3 horas por semana
          </div>
          <div className="flex">
            <i className="fa fa-check"></i>
            No se requieren conocimientos previos.
          </div>
        </div>
        <div className="modal">
          <ModalCompra />
        </div>
        <div className="space-y">
          <p className='t-900'>$ 59.999</p>
        </div>
        <div className="space-y">
          <button className="btn-cta t-200">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            Comprar curso
          </button>
        </div>
      </div>
      <div className="parent2">
        <img
          src={CursoImg}
          alt="Image"
          className="img-parent2"
        />
      </div>
    </div>
  </>
  )
}
export default SectionCompra