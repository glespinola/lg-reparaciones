import './FormContainerStyle.css';

const FormContainer = () => {
  return (
    <form className="container-form">
      <div className="card-form">
          <p className="t-600 card-title text-center">¿Necesitas ayuda con tu dispositivo?</p>
          <p className="card-text">Estamos disponibles para ayudarte. Completa el formulario con detalles sobre los problemas de tu teléfono y nuestro equipo de reparación se comunicará contigo rápidamente para brindarte la asistencia necesaria.</p>
          <div className="card-items">
            <div className="inputBox">
              <input type="text" required="required"/>
              <span className="user">Nombre</span>
            </div>
            <div className="inputBox">
              <input type="tel" required="required"/>
              <span>Telefono</span>
            </div>
          </div>
          <div className="card-items">
            <div className="inputBox">
              <input type="email" required="required"/>
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input type="text" required="required"/>
              <span>Localidad</span>
            </div>
          </div>
          <div className="inputBox textarea">
              <textarea type="text" required="required"/>
              <span>Mensaje</span>
          </div>
          <button className="enter">Enviar</button>
      </div>
    </form>
  )
}
export default FormContainer