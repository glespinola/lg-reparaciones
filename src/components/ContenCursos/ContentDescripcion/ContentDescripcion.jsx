const ContentDescripcion = ({descripcion, paraQuienEs, resultados}) => {
  return (
  <div className="content-4 card--content--cursos2">
    <h2>Descripción</h2>
      <p> <i className='fa fa-check'></i> {descripcion} </p>
    <h2>¿Para quién es este curso?</h2>
    <ul>
      {paraQuienEs.map((element, index) => (
        <li key={index}><i className='fa fa-check'></i> {element}</li>
      ))}
    </ul>
    <h2>Resultados</h2>
     <p> <i className='fa fa-check'></i> {resultados}</p>
  </div>
  )
}

export default ContentDescripcion