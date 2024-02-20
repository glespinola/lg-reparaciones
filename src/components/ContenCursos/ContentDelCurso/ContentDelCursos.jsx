import { useState } from 'react';

const ContentDelCurso = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="content-2 card--content--cursos2">
      <h2 className='content-2__t'>Contenido del Curso</h2>
      <h2 onClick={() => handleToggle(0)} className="content-2__title">
        <i className={`fa ${openIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'} chevron`}></i>
        Introducción a la telefonía móvil 
      </h2>
      {openIndex === 0 && (
        <ul className={`${openIndex === 0 ? 'open' : 'close'} content-2__list`}>
          <li><i className="fa fa-check"></i> Breve historia de la evolución de los teléfonos móviles.</li>
          <li><i className="fa fa-check"></i> Conceptos básicos de telecomunicaciones.</li>
          <li><i className="fa fa-check"></i> Principios de funcionamiento de un teléfono móvil.</li>
        </ul>
      )}

      <h2 onClick={() => handleToggle(1)} className="content-2__title">
        <i className={`fa ${openIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'} chevron`}></i>
        Estructura y componentes del teléfono móvil 
      </h2>
      {openIndex === 1 && (
        <ul className={`${openIndex === 1 ? 'open' : 'close'} content-2__list`}>
          <li><i className="fa fa-check"></i> Descripción detallada de los componentes internos y externos de un teléfono móvil.</li>
          <li><i className="fa fa-check"></i> Función y ubicación de cada componente.</li>
        </ul>
      )}

      <h2 onClick={() => handleToggle(2)} className="content-2__title">
        <i className={`fa ${openIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'} chevron`}></i>
        Desarmado y ensamblado del dispositivo 
      </h2>
      {openIndex === 2 && (
        <ul className={`${openIndex === 2 ? 'open' : 'close'} content-2__list`}>
          <li><i className="fa fa-check"></i> Pasos para desmontar un teléfono móvil de forma segura y sin dañar los componentes.</li>
          <li><i className="fa fa-check"></i> Técnicas de ensamblado para garantizar un funcionamiento correcto del dispositivo.</li>
        </ul>
      )}
    </div>
  );
};

export default ContentDelCurso;
