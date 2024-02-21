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
  resultados: ["Al completar este curso, estarás listo para abordar el 70% de los problemas en teléfonos celulares. Desde cambios de módulos hasta reparaciones de periféricos, obtendrás conocimientos prácticos y teóricos esenciales."],
};

const nivelDos = {
  nivel: 'Nivel 2 - Intermedio',
  titleColor: '#e3c84e',
  imgCard:nivel2,
  contenidoCurso: 'En este curso avanzado, exploraremos en detalle la composición interna de los dispositivos móviles. Obtendrás conocimientos fundamentales y habilidades especializadas para enfrentar desafíos más complejos en la reparación de teléfonos.',
  link: 'curso-intermedio',
};

const nivelTres = {
  nivel: 'Nivel 3 - Avanzado',
  titleColor: '#2be052',
  imgCard: nivel12,
  contenidoCurso: 'Explora a fondo la estructura interna de los teléfonos móviles y adquiere habilidades avanzadas para su reparación. Desde componentes esenciales hasta técnicas especializadas, este curso te preparará para enfrentar desafíos complejos.',
  link: 'curso-avanzado',
};
  return (
    <section id="cursos">
      <h1 className="text-center curso__title">Cursos de Reparacion de Celulares</h1>
      <div className='container--cursos'>
        <Cursos {...nivelUno}/>
        <Cursos {...nivelDos}/>
        <Cursos {...nivelTres}/>
      </div>
    </section>
  )
}
