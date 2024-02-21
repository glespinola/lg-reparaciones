import './CursoStyle.css'
import ContentDescripcion from '../../components/ContenCursos/ContentDescripcion/ContentDescripcion';
import ContentCompra from '../../components/ContenCursos/ContentCompra/ContentCompra';
import ContentCursos2 from '../../components/ContenCursos/ContentDelCurso/ContentDelCursos';
import ContentCursosAprender from '../../components/ContenCursos/ContentCurso/ContentCursos';
import ContentIncluye from '../../components/ContenCursos/ContentIncluye/ContentIncluye';
import Person from '../../components/Person/Person';

const CursoAvanzado = () => {
  const contenidoAprender = [
    "Estudio de un SMD",
    "Estudio de un BGA",
    "Técnicas de reballing",
    "Protocolos de diagnóstico",
    "Reparaciones en casos reales"
  ];
  const contenidoCompra = {
    nivel: 'Avanzado',
    precio: "Consultar",
    fechas: ["Consultar"],
    requisitos: "Se requieren conocimientos previos o tener realizado Nivel Inicial e Intermedio"
  }
    const contentData = [
    {
    title: 'Estudio de un SMD',
    list: [
      'Descripción y funcionamiento de los componentes SMD.',
      'Identificación y análisis de componentes SMD en placas de circuito.',
      'Técnicas de soldadura y desoldadura para componentes SMD.'
    ]
  },
  {
    title: 'Estudio de un BGA',
    list: [
      'Características y aplicaciones de los componentes BGA.',
      'Métodos de montaje y desmontaje de componentes BGA.',
      'Reparación de soldaduras BGA defectuosas.'
    ]
  },
  {
    title: 'Técnicas de reballing',
    list: [
      'Procedimiento detallado para realizar el reballing de chips BGA.',
      'Herramientas y equipos necesarios para el reballing efectivo.',
      'Consejos y prácticas recomendadas para el éxito del reballing.'
    ]
  },
  {
    title: 'Cambio de un SMD',
    list: [
      'Pasos para reemplazar un componente SMD defectuoso de manera segura.',
      'Técnicas de soldadura para fijar nuevos componentes SMD en su lugar.',
      'Verificación y pruebas de funcionamiento después del cambio de componente.'
    ]
  },
  {
    title: 'Cambio de un BGA',
    list: [
      'Procedimiento para reemplazar un componente BGA en una placa de circuito.',
      'Técnicas de soldadura y desoldadura para componentes BGA.',
      'Pruebas de funcionamiento y verificación de la conexión después del cambio.'
    ]
  },
  {
    title: 'Uso del multímetro',
    list: [
      'Funcionamiento básico del multímetro y sus diferentes modos de medición.',
      'Aplicaciones prácticas del multímetro en la reparación de dispositivos electrónicos.',
      'Interpretación de los resultados de las mediciones para diagnosticar problemas.'
    ]
  },
  {
    title: 'Protocolos de diagnóstico',
    list: [
      'Métodos sistemáticos para diagnosticar problemas en placas de circuito.',
      'Uso de herramientas de diagnóstico y software especializado.',
      'Análisis de datos y generación de informes de diagnóstico.'
    ]
  }
  ];

  const contenidoDescripcion = {
    descripcion: "El nivel 3 del curso de reparación de teléfonos móviles profundiza en aspectos avanzados de la reparación y mantenimiento de dispositivos electrónicos. Desde el estudio detallado de componentes SMD y BGA hasta técnicas especializadas como el reballing y el diagnóstico avanzado, este nivel proporciona un conocimiento exhaustivo para abordar problemas complejos en equipos electrónicos. Con un enfoque práctico y teórico, este curso prepara a los estudiantes para enfrentar desafíos reales en el campo de la reparación de dispositivos móviles.",
  paraQuienEs: ["Profesionales con experiencia en reparación de dispositivos móviles", "Técnicos de electrónica en busca de habilidades avanzadas", "Emprendedores y dueños de negocios en la industria de la reparación de dispositivos móviles", "Estudiantes y aficionados con conocimientos básicos de electrónica"],
  resultados: "Al completar este nivel del curso, los estudiantes estarán equipados con las habilidades necesarias para abordar el 90% de los problemas en teléfonos móviles y dispositivos electrónicos similares. Desde la identificación y reparación de componentes hasta el diagnóstico avanzado de problemas de software y hardware, los graduados estarán listos para enfrentar desafíos complejos en el campo de la reparación de dispositivos móviles."
  }
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

export default CursoAvanzado
