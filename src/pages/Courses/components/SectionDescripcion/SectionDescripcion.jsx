import './SectionDescripcionStyle.css';
const SectionDescripcion = ({descripcion, paraQuienEs, resultados}) => {
  return (
  <div className="content-4 card-certificado">
    <h3>Descripción</h3>
      <p> <i className='fa fa-check'></i> {descripcion} </p>
    <h3>¿Para quién es este curso?</h3>
    <ul>
      {paraQuienEs.map((element, index) => (
        <li key={index}><i className='fa fa-check'></i> {element}</li>
      ))}
    </ul>
    <h3>Resultados</h3>
     <p> <i className='fa fa-check'></i> {resultados}</p>
  </div>
  )
}

export default SectionDescripcion