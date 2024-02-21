import './CursoStyle.css'
import ContentDescripcion from '../../components/ContenCursos/ContentDescripcion/ContentDescripcion';
import ContentCompra from '../../components/ContenCursos/ContentCompra/ContentCompra';
import ContentCursos2 from '../../components/ContenCursos/ContentDelCurso/ContentDelCursos';
import ContentCursosAprender from '../../components/ContenCursos/ContentCurso/ContentCursos';
import ContentIncluye from '../../components/ContenCursos/ContentIncluye/ContentIncluye';
import Person from '../../components/Person/Person';

const CursoIntermedio = () => {
  const contenidoCompra = {
    nivel: 'Intermedio',
    precio: "80.000",
    fechas: ["Consultar"],
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
};

  return (
    <div className="container__cursos-1">
      <ContentCompra {...contenidoCompra}/>
      <div className="content-container">
        <ContentIncluye />
        <ContentCursosAprender title='Lo que aprenderás' content={contenidoAprender} icon/>
      </div>
        <ContentCursos2 contentData={contentData}/>
        <div className="person-container">
          <ContentDescripcion {...contenidoDescripcion}/>
          <Person />
        </div>
    </div>
  )
}

export default CursoIntermedio
