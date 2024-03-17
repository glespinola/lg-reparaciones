import './NewsletterStyle.css';
const Newsletter = () => {
  return (
  <div className="footer-new">
    <div className="footer-container-new">
      <h3>Newsletter</h3>
      <p>
        Suscríbete a nuestro newsletter para recibir noticias y promociones.
      </p>
      <form className="newsletter__form text-center">
        <div className="inputbox">
          <input required="required" type="email" />
          <span>Username</span>
          <i></i>
          </div>
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  </div>
  )
}
export default Newsletter