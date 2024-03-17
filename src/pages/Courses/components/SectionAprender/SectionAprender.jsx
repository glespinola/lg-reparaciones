/* eslint-disable react/prop-types */
import './SectionAprenderStyle.css';

const SectionAprender = ({title, content, icon}) => {
  return (
    <div className="card-certificado">
      <h3>{title}</h3>
      <ul className="list__aprender">
        {content.map((item, index) => (
          <li key={index}><i className={icon ? "fa fa-check" : ''}></i> {item}</li>
        ))}
      </ul>
    </div>
  )
}
export default SectionAprender