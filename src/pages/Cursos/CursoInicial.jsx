import './CursoStyle.css'
import ContentDescripcion from '../../components/ContenCursos/ContentDescripcion/ContentDescripcion';
import ContentCompra from '../../components/ContenCursos/ContentCompra/ContentCompra';
import ContentCursos2 from '../../components/ContenCursos/ContentDelCurso/ContentDelCursos';
import ContentCursosAprender from '../../components/ContenCursos/ContentCurso/ContentCursos';
import ContentIncluye from '../../components/ContenCursos/ContentIncluye/ContentIncluye';
import Person from '../../components/Person/Person';

const CursoInicial = () => {
  const contenidoAprender = [
    "Funcionamiento y composición del teléfono móvil",
    "Desarmado y armado del dispositivo",
    "Cambio de módulos y táctiles",
    "Reparación de periféricos (hardware)",
    "Software y actualizaciones"
  ];
  const contenidoCompra = {
    nivel: 'Inicial',
    precio: "60.000",
    fechas: ["Lunes 1/4 a Jueves 4/4 de 19:00 a 22:00hs. Modalidad Intensiva. Cuatro Clases en una Semana.", " Sabado 6/4 a 27/4 de 13:00hs a 16:00hs o de 17:00hs a 20:00hs. Modalidad Normal. Una Clase por Semana"],
    requisitos: "No se requieren conocimientos previos. Perfecto para principiantes."
  }
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

export default CursoInicial
