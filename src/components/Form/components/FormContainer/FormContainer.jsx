import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastifyHelper } from '../../../../helpers/toastHelpers';
import './FormContainerStyle.css';

const FormContainer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    localidad: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const resetFormData = () => {
    setFormData({
    name: '',
    email: '',
    message: '',
    phone: '',
    localidad: ''
    })
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4oxksfr', 'template_25tfdhe', form.current, '7sslgbX1XSBX3pwCP')
      .then((response) => {
        console.log('Correo enviado correctamente', response);
        resetFormData();
        ToastifyHelper({success: true});
      })
      .catch((error) => {
        console.log('Error al enviar el correo', error);
        ToastifyHelper();
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="container-form">
      <div className="card-form">
          <p className="t-600 card-title-form text-center">¿Necesitas ayuda con tu dispositivo?</p>
          <p className="card-text">Estamos disponibles para ayudarte. Completa el formulario con detalles sobre los problemas de tu teléfono.</p>
          <div className="card-items">
            <div className="inputBox">
              <input placeholder=" " type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
              <span className="user">Nombre</span>
            </div>
            <div className="inputBox">
              <input placeholder="" type="tel" id="phone" name="phone"  value={formData.phone} onChange={handleInputChange} required />
              <span>Telefono</span>
            </div>
          </div>
          <div className="card-items">
            <div className="inputBox">
              <input placeholder="" type="email" id="email" name="email"  value={formData.email} onChange={handleInputChange} required/>
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input placeholder="" type="text" id="localidad" name="localidad"  value={formData.localidad} onChange={handleInputChange} required/>
              <span>Localidad</span>
            </div>
          </div>
          <div className="inputBox textarea">
              <textarea placeholder="" type="text" id="message" name="message" value={formData.message} onChange={handleInputChange} required/>
              <span>Mensaje</span>
          </div>
          <button className="enter">Enviar</button>
      </div>
    </form>
  )
}
export default FormContainer