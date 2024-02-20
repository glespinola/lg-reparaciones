import nivel1 from '../../assets/img/Cursos/Niveles/nivel1.jpg';
import nivel2 from '../../assets/img/Cursos/Niveles/nivel2.jpg';
import nivel12 from '../../assets/img/Cursos/Niveles/nivel12.jpg';
import Cursos from './Cursos';

export const Curso = () => {
  const nivelUno = {
  nivel: 'Nivel 1 - Inicial',
  titleColor: '#31e3ff',
  imgCard: nivel1,
  contenidoCurso: 'En este curso, exploraremos a fondo el funcionamiento y la estructura de los teléfonos móviles. Adquirirás habilidades clave para convertirte en un experto en reparación, abordando diversos aspectos.',
  link: 'curso-inicial',
  contenido: ["Desarmar y ensamblar dispositivos móviles.", "Cambio de módulos, táctiles y periféricos.", "Herramientas e insumos necesarios para el trabajo.", "Técnicas para realizar reparaciones efectivas.", "Diagnóstico y resolución de fallas comunes."],
  software: ["Conceptos básicos de software en dispositivos móviles.", "Actualización de software y flasheo.", /* ... */],
  duracion: "Ofrecemos dos modalidades de cursos: Normal (una clase por semana) e Intensiva (4 clases en una semana). Elige la que mejor se adapte a tus necesidades y ritmo de aprendizaje.",
  requisitos: "No se requieren conocimientos previos. Perfecto para principiantes.",
  proximasFechas: ["Lunes 1/4 a Jueves 4/4 de 19:00 a 22:00hs. Modalidad Intensiva. Cuatro Clases en una Semana", "Sabado 6/4 a 27/4 de 13:00hs a 16:00hs o de 17:00hs a 20:00hs. Modalidad Normal. Una Clase por Semana"],
  resultados: ["Al completar este curso, estarás listo para abordar el 70% de los problemas en teléfonos celulares. Desde cambios de módulos hasta reparaciones de periféricos, obtendrás conocimientos prácticos y teóricos esenciales."],
  certificado: "Se entrega Certificado de Aprobacion y de Asistencia."
};

const nivelDos = {
  nivel: 'Nivel 2 - Intermedio',
  titleColor: '#e3c84e',
  imgCard:nivel2,
  contenidoCurso: 'En este curso avanzado, exploraremos en detalle la composición interna de los dispositivos móviles. Obtendrás conocimientos fundamentales y habilidades especializadas para enfrentar desafíos más complejos en la reparación de teléfonos.',
  link: 'curso-intermedio',
  duracion: "Ofrecemos dos modalidades de cursos: Normal (una clase por semana) e Intensiva (4 clases en una semana). Elige la que mejor se adapte a tus necesidades y ritmo de aprendizaje.",
  contenido: ["Componentes SMD y BGA.", "Herramientas y Técnicas de Soldadura.", "Diagnósticos Avanzados.", "Cambio de Componentes de Placa Base.", "Consejos Prácticos y Resolución de Problemas."],
  software: ["Desarrollo de herramientas de software personalizadas."],
  requisitos: "Requiere completar el Nivel 1.",
  proximasFechas: ["Fecha a confirmar de 16:00 a 20:00hs. Modalidad Intensiva. Cuatro Clases en una Semana", "Fecha a confirmar de 08:00hs a 12:00hs o de 16:00hs a 20:00hs. Modalidad Normal. Una Clase por Semana"],
  resultados: ["Al completar este curso, estarás preparado para enfrentar desafíos técnicos y consolidar tu posición como experto en reparación de teléfonos móviles. Además, estarás capacitado para ofrecer soluciones innovadoras y satisfacer las necesidades de tus clientes de manera eficiente."],
  certificado: "Se entrega Certificado de Aprobacion y de Asistencia. "
};

const nivelTres = {
  nivel: 'Nivel 3 - Avanzado',
  titleColor: '#2be052',
  imgCard: nivel12,
  contenidoCurso: 'Explora a fondo la estructura interna de los teléfonos móviles y adquiere habilidades avanzadas para su reparación. Desde componentes esenciales hasta técnicas especializadas, este curso te preparará para enfrentar desafíos complejos.',
  link: 'curso-avanzado',
  contenido: ["Desarmado y ensamblado de dispositivos móviles.", "Cambio de componentes táctiles y periféricos.", "Técnicas avanzadas de soldadura para reparaciones especializadas.", "Diagnóstico de problemas complejos en dispositivos móviles.", "Estrategias efectivas para resolver fallas comunes en celulares."],
  software: ["Desarrollo de herramientas de software personalizadas."],
  duracion: "Ofrecemos dos modalidades de cursos: Normal (una clase por semana) e Intensiva (4 clases en una semana). Elige la que mejor se adapte a tus necesidades y ritmo de aprendizaje.",
  requisitos: "Requiere completar el Nivel 1 y 2.",
  proximasFechas: ["Consultar"],
  resultados: ["Con nuestro curso, dominarás el 90% de los problemas en celulares. Desde cambios de módulos hasta reparaciones de periféricos, ofrecerás soluciones eficientes. Conviértete en un experto y destaca en este campo en constante evolución."],
  certificado: "Se entrega Certificado de Aprobacion y de Asistencia."
};
  return (
    <section>
      <h1 className="text-center curso__title">Cursos de Reparacion de Celulares</h1>
      <div className='container--cursos'>
        <Cursos {...nivelUno}/>
        <Cursos {...nivelDos}/>
        <Cursos {...nivelTres}/>
      </div>
    </section>
  )
}
