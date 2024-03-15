import { useState } from 'react';
import './SectionContentStyle.css'
const SectionContent = ({contentData}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="content-2 ">
      <h2 className='content-2__t'>Contenido del Curso</h2>
      <div>
        {contentData.map((content, index) => (
          <div key={index} className='container__list'>
            <h3 onClick={() => handleToggle(index)} className="content__title">
              <i className={`fa ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} chevron`}></i>
              {content.title}
            </h3>
       
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

export default SectionContent;
