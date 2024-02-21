import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './FormStyle.css'
import {ToastifyHelper} from '../../helpers/toastHelpers'

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
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
    phone: ''
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
    <form ref={form} onSubmit={sendEmail} className="form">
    <h4 className="title text-center">¿Necesitas ayuda con tu dispositivo?</h4>
    <div className="subtitle text-center">Déjanos tu consulta</div>

    <div className="input-container ic1">
      <input placeholder=" " type="text" className="input" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
      <div className="cut"></div>
      <label className="iLabel" htmlFor="name">Nombre</label>
    </div>

    <div className="input-container ic2">
      <input placeholder="" type="email" className="input" id="email" name="email"  value={formData.email} onChange={handleInputChange} required/>
      <div className="cut cut-short"></div>
      <label className="iLabel" htmlFor="email">Email</label>
    </div>
    <div className="input-container ic1">
      <input placeholder="" type="tel" className="input" id="phone" name="phone"  value={formData.phone} onChange={handleInputChange} required />
      <div className="cut"></div>
      <label className="iLabel" htmlFor="phone">Telefono</label>
    </div>
    <div className="input-container ic1">
      <textarea placeholder="" type="text" className="input" id="message" name="message" value={formData.message} onChange={handleInputChange} required/>
      <div className="cut"></div>
      <label className="iLabel" htmlFor="message">Mensaje</label>
    </div>
    <button className="submit" type="text">Enviar</button>
  </form>
  );
};

export default Form;
