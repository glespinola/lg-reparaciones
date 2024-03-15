import SectionAprender from "./components/SectionAprender/SectionAprender";
import SectionCompra from "./components/SectionCompra/SectionCompra"
import SectionContent from "./components/SectionContent/SectionContent";
import SectionDescripcion from "./components/SectionDescripcion/SectionDescripcion";
import SectionIncluye from "./components/SectionIncluye/SectionIncluye"
import "./CourseStyle.css"

const Courses = () => {
  const contenidoAprender = [
    "Funcionamiento y composición del teléfono móvil",
    "Desarmado y armado del dispositivo",
    "Cambio de módulos y táctiles",
    "Reparación de periféricos (hardware)",
    "Software y actualizaciones"
  ];
  const contentData = [
    {
      title: 'Introducción a la telefonía móvil',
      list: [
        'Breve historia de la evolución de los teléfonos móviles.',
        'Conceptos básicos de telecomunicaciones.',
        'Principios de funcionamiento de un teléfono móvil.'
      ]
    },
    {
      title: 'Estructura y componentes del teléfono móvil',
      list: [
        'Descripción detallada de los componentes internos y externos de un teléfono móvil.',
        'Función y ubicación de cada componente.'
      ]
    },
    {
      title: 'Desarmado y ensamblado del dispositivo',
      list: [
        'Pasos para desmontar un teléfono móvil de forma segura y sin dañar los componentes.',
        'Técnicas de ensamblado para garantizar un funcionamiento correcto del dispositivo.'
      ]
    }
  ];

  const contenidoDescripcion = {
    descripcion: "El curso de reparación de teléfonos móviles es una oportunidad para adentrarse en el fascinante mundo de la tecnología móvil y aprender habilidades prácticas para diagnosticar y solucionar problemas comunes en dispositivos móviles. Desde entender cómo funciona un teléfono móvil hasta desarmarlo y realizar reparaciones de hardware y software, este curso proporciona una amplia gama de conocimientos esenciales para cualquier entusiasta de la tecnología o profesional que desee incursionar en el campo de la reparación de dispositivos móviles",
    paraQuienEs: ["Principiantes sin experiencia previa",'Entusiastas de la tecnología', "Profesionales en busca de nuevas habilidades","Emprendedores y dueños de negocios", "Estudiantes y aficionados a la tecnología"],
    resultados: "Al completar este curso, estarás listo para abordar el 70% de los problemas en teléfonos celulares. Desde cambios de módulos hasta reparaciones de periféricos, obtendrás conocimientos prácticos y teóricos esenciales."
  }
  return (
    <section className="courses container">
      <SectionCompra />
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
export default Courses