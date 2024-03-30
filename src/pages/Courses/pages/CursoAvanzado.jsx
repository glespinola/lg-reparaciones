import SectionAprender from "../components/SectionAprender/SectionAprender";
import SectionCompra from "../components/SectionCompra/SectionCompra"
import SectionContent from "../components/SectionContent/SectionContent";
import SectionDescripcion from "../components/SectionDescripcion/SectionDescripcion";
import SectionIncluye from "../components/SectionIncluye/SectionIncluye"
import "../CourseStyle.css"

const CursoAvanzado = () => {

  const contentCompra = {
    title: "Curso Avanzado - Nivel 3",
    text: "Conviértete en un experto en reparación de teléfonos, dominando las técnicas más avanzadas y resolviendo incluso los problemas más difíciles. Este nivel es para aquellos que buscan destacarse en el campo de la reparación de dispositivos móviles.",
    date: {normal:["Consultar"], intensiva: ["Consultar"]},
    price: "130.000",
    priceCourseModal: "70.000",
    linkCompra: "https://mpago.la/22HBs2A",
    requisitos: "Se requieren conocimientos previos o tener realizado Nivel Inicial e Intermedio"
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
export default CursoAvanzado