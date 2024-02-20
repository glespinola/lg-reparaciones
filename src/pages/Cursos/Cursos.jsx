import './CursoStyle.css'
import ContentDescripcion from '../../components/ContenCursos/ContentDescripcion/ContentDescripcion';
import ContentCompra from '../../components/ContenCursos/ContentCompra/ContentCompra';
import ContentCursos2 from '../../components/ContenCursos/ContentDelCurso/ContentDelCursos';
import ContentCursosAprender from '../../components/ContenCursos/ContentCurso/ContentCursos';
import ContentIncluye from '../../components/ContenCursos/ContentIncluye/ContentIncluye';
import Person from '../../components/Person/Person';

const Cursos = () => {
  const contenidoAprender = [
    "Funcionamiento y composición del teléfono móvil",
    "Desarmado y armado del dispositivo",
    "Cambio de módulos y táctiles",
    "Reparación de periféricos (hardware)",
    "Software y actualizaciones"
  ];
  return (
    <div className="container__cursos-1">
      <ContentCompra />
      <div className="content-container">
        <ContentIncluye />
        <ContentCursosAprender title='Lo que aprenderás' content={contenidoAprender} icon/>
      </div>
        <ContentCursos2 />
        <div className="person-container">
          <ContentDescripcion />
          <Person />
        </div>
    </div>
  )
}

export default Cursos
