

import imgPhone1 from '../../assets/img/ServicioTecnico/phone1.jpg'

import './ServicioTecnicoStyles.css';
import Form from '../Form/Form';
import Servicio from './Servicio';

const ServicioTecnico = () => {


  return (
    <div className="servicio__container" id="service">
      <h1 className='servicio__title text-center'>Servicio Tecnico de Celulares</h1>
        <h2 className='servicio__subtitle text-center'>¡Déjanos ayudarte a reparar tu celular!</h2>
      <div className='servicio__flex'>
      <div className='servicio__info servicio__flex'>
        <div className="servicio__flex card--servicio">
          <img src={imgPhone1} alt="Reparacion de Celular" className='servicio__img'/>
          <div className="servicio__container--flex">
            <Servicio title={"Cambio de Pantalla"} text={"Si tu pantalla está quebrada, muestra una línea de color, no muestra imagen correctamente, o el táctil no funciona como debería."} />
            <Servicio title={"Cambio de Batería"} text={"Si la batería de tu dispositivo dura poco, no carga correctamente o directamente no enciende."} />
            <Servicio title={"Audio"} text={"Si los parlantes no emiten sonido o si al conectar auriculares no hay audio."} />
            <Servicio title={"Micrófono"} text={"Si no puedes grabar mensajes de voz en aplicaciones como WhatsApp, el micrófono no funciona correctamente, o al realizar llamadas no te escuchan."} />
            <Servicio title={"Botón de inicio"} text={"Si el botón de inicio no responde o si la huella digital no es detectada correctamente."} />
            <Servicio title={"FACE ID"} text={"Si la función de reconocimiento facial no desbloquea tu teléfono correctamente."} />
            <Servicio title={"Placa base"} text={"Si tu teléfono se reinicia constantemente, se calienta de manera anormal o presenta fallas no mencionadas anteriormente, es posible que la placa base esté dañada."} />
            <Servicio title={"Cámara Dañada"} text={"Si tus fotos salen borrosas o la cámara no funciona, podemos repararla o reemplazarla para que vuelvas a capturar tus momentos favoritos con claridad."} />
            <Servicio title={"PIN de Carga Roto"} text={"Si tienes problemas para cargar tu dispositivo, podemos reparar o reemplazar el conector de carga para que puedas cargarlo fácilmente y transferir datos sin problemas."} />
          </div>
        </div>
        <div className="flex">
          <Form />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ServicioTecnico;

