import './BoxRedesStyle.css'

const BoxRedes = ({img}) => {
  return (
    <div className="box-redes">
      <a href="https://www.instagram.com/lgreparaciones/" target="_blank" rel="noopener noreferrer">
        <img src={img} alt="Imagen Redes Sociales" className='imagen-redes'/>
      </a>
    </div>
  )
}
export default BoxRedes