import SectionAprender from "../components/SectionAprender/SectionAprender";
import SectionCompra from "../components/SectionCompra/SectionCompra"
import SectionContent from "../components/SectionContent/SectionContent";
import SectionDescripcion from "../components/SectionDescripcion/SectionDescripcion";
import SectionIncluye from "../components/SectionIncluye/SectionIncluye"
import "../CourseStyle.css"

const CursoIntermedio = () => {

  const contentCompra = {
    title: "Curso Intermedio - Nivel 2",
    text: "Mejora tus habilidades de reparación y aprende técnicas avanzadas para solucionar problemas más complejos. Perfecto para quienes desean perfeccionar sus habilidades en la reparación de teléfonos.",
    date: {normal:["Consultar"], intensiva: ["Consultar"]},
    price: "90.000",
    priceCourseModal: "50.000",
    linkCompra: "https://mpago.la/2JLhB1y",
    requisitos: "Se requieren conocimientos previos o tener realizado Nivel Inicial."

  }
  const contenidoAprender = [
    "Funcionamiento y composición del teléfono móvil",
    "Desarmado y armado del dispositivo",
    "Cambio de módulos y táctiles",
    "Reparación de periféricos (hardware)",
    "Software y actualizaciones"
  ];
  const contentData = [
{
    title: 'Componentes SMD',
    list: [
      'Descripción y función de los componentes SMD.',
      'Identificación de componentes SMD en placas de circuito.',
      'Técnicas de soldadura para componentes SMD.'
    ]
  },
  {
    title: 'Componentes BGA',
    list: [
      'Características y aplicaciones de los componentes BGA.',
      'Métodos de montaje y desmontaje de componentes BGA.',
      'Reparación de soldaduras BGA defectuosas.'
    ]
  },
  {
    title: 'Tipos de soldaduras',
    list: [
      'Soldadura convencional con estaño y flux.',
      'Soldadura por reflujo y su aplicación en la industria electrónica.',
      'Soldadura sin plomo y sus ventajas ambientales.'
    ]
  },
  {
    title: 'Diagnósticos',
    list: [
      'Técnicas de diagnóstico de fallos en placas de circuito.',
      'Identificación de problemas comunes en equipos electrónicos.',
      'Uso de software de diagnóstico para evaluar el estado del dispositivo.'
    ]
  },
  {
    title: 'Cambio de componentes de placa',
    list: [
      'Pasos para reemplazar componentes defectuosos en una placa de circuito.',
      'Técnicas de soldadura para fijar nuevos componentes en su lugar.',
      'Verificación y prueba de funcionamiento después del cambio de componentes.'
    ]
  },
  {
    title: 'Técnicas para soldar',
    list: [
      'Métodos de soldadura para diferentes tipos de componentes electrónicos.',
      'Técnicas avanzadas de soldadura, como el reballing de chips BGA.',
      'Consejos para lograr soldaduras de alta calidad y duraderas.'
    ]
  },
  {
    title: 'Equipos mojados',
    list: [
      'Pasos para desmontar y secar correctamente equipos electrónicos mojados.',
      'Técnicas para eliminar la humedad y prevenir daños permanentes.',
      'Pruebas de funcionamiento y verificación de daños después del secado.'
    ]
  },
  {
    title: 'Equipos en corto',
    list: [
      'Identificación y diagnóstico de equipos con cortocircuitos internos.',
      'Técnicas para aislar y reparar cortocircuitos en placas de circuito.',
      'Prevención de daños adicionales y pruebas de funcionamiento después de la reparación.'
    ]
  }
  ];

  const contenidoDescripcion = {
    descripcion: "En este curso, exploraremos en detalle cómo está conformado un equipo por dentro, centrándonos en los aspectos más importantes para su reparación y mantenimiento. Desde la identificación de componentes hasta la resolución de problemas complejos, este curso proporciona una guía completa para cualquier persona interesada en comprender y trabajar con equipos electrónicos.",
  paraQuienEs: [
    "Técnicos y profesionales en reparación de dispositivos electrónicos",
    "Entusiastas de la tecnología interesados en aprender sobre reparación de equipos",
    "Estudiantes de electrónica en busca de conocimientos prácticos",
    "Emprendedores que desean agregar servicios de reparación a sus negocios",
    "Cualquier persona curiosa por comprender el funcionamiento interno de los equipos electrónicos"
  ],
  resultados: "Al finalizar este curso, los participantes estarán capacitados para comprender la estructura interna de diversos equipos electrónicos y realizar diagnósticos precisos. Además, adquirirán habilidades prácticas para la reparación y mantenimiento de equipos, lo que les permitirá abordar una amplia gama de problemas en dispositivos electrónicos."
  }
  return (
    <section className="courses container">
      <SectionCompra {...contentCompra} />
      <div className="courses-container">
        <SectionIncluye />
        <SectionAprender title='Lo que aprenderás' content={contenidoAprender} icon/>
      </div>
      <div className="courses-container-1">
        <SectionContent contentData={contentData}/>
        <SectionDescripcion {...contenidoDescripcion}/>
      </div>
    </section>
  )
}
export default CursoIntermedio