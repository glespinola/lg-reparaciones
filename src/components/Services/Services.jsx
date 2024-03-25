import "./ServicesStyle.css";
import imgService from "../../assets/img/ServicioTecnico/service.jpg"
import ServicesBox from "./components/ServicesBox";
const Services = () => {
const contentData = 
[
  {
    title: "Cambio de Pantalla",
    list: [
      "Si tu pantalla está quebrada, muestra una línea de color, no muestra imagen correctamente, o el táctil no funciona como debería."
    ]
  },
  {
    title: "Cambio de Batería",
    list: [
      "Si la batería de tu dispositivo dura poco, no carga correctamente o directamente no enciende."
    ]
  },
  {
    title: "PIN de Carga Roto",
    list: [
      "Si tienes problemas para cargar tu dispositivo, podemos reparar o reemplazar el conector de carga para que puedas cargarlo fácilmente y transferir datos sin problemas."
    ]
  },
  {
    title: "Placa base",
    list: [
      "Si tu teléfono se reinicia constantemente, se calienta de manera anormal o presenta fallas no mencionadas anteriormente, es posible que la placa base esté dañada."
    ]
  },
  {
    title: "Microfono",
    list: [
      "Si no podes grabar audios por Whatsapp, no te funciona el grabado de voz o al llamar no te escuchan."
    ]
  },
];
  return (
    <section className="service" id="services">
      <div className="container">
        <div className="service">
          <h2 className="service__title">Servicio Técnico</h2>
          <p className="b-large">¡Déjanos ayudarte a reparar tu celular!</p>
        </div>
        <div className="service__list">
          <img src={imgService} alt="Servico Tecnico" className="service__image"/>
          <div className="service__items">
            <ServicesBox contentData={contentData}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services