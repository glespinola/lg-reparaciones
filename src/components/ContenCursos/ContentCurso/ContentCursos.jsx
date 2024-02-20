/* eslint-disable react/prop-types */

const ContentCursosAprender = ({title, content, icon}) => {
  return (
    <div className="content-2 card--content--cursos2 flex-1">
      <h2>{title}</h2>
      <ul>
        {content.map((item, index) => (
          <li key={index}><i className={icon ? "fa fa-check" : ''}></i> {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentCursosAprender