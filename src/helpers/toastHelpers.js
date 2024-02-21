import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';


export const ToastifyHelper = (success)=> {
  Toastify({
    text: success ? 'El Correo fue enviado!': 'Error! Intentar de nuevo',
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: success ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #f00, #f2a)",
    },
  }).showToast();
}