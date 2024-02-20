import { Link } from "react-router-dom"
import './Error404Style.css'
import scrollToTop from "../../hooks/scrollToTop ";

const Error404 = () => {
  
  const scrollRef = scrollToTop();

  return (
    <div className="container__err404 container">
      <div className="content">
        <div className="container">
          <div className="error-404">
            <h2>Ooops!!!</h2>
            <div className="page-404">
              <span>No se encontro la página</span>
              <p>404</p>
            </div>
            <p>No pudimos encontrar la página que está buscando. Por favor, pruebe otra página y verifique la URL que ha introducido.</p>
            <Link to="/" onClick={scrollRef} className="go-back">Volver al Inicio</Link>
          </div>   
        </div>   
      </div>
    </div>
  )
}

export default Error404