import { useState } from 'react';

const ContentDelCurso = ({contentData}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="content-2 card--content--cursos2">
      <h2 className='content-2__t'>Contenido del Curso</h2>
      <div>
        {contentData.map((content, index) => (
          <div key={index}>
            <h2 onClick={() => handleToggle(index)} className="content-2__title">
              <i className={`fa ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} chevron`}></i>
              {content.title}
            </h2>
            {openIndex === index && (
              <ul className={`${openIndex === index ? 'open' : 'close'} content-2__list`}>
                {content.list.map((item, i) => (
                  <li key={i}><i className="fa fa-check"></i> {item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentDelCurso;
