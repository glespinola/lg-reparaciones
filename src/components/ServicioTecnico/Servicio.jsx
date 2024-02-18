/* eslint-disable react/prop-types */

const Servicio = ({title, text}) => {
  return (
    <>
      <h3 className='servicio__title--h3'>{title}</h3>
      <p className='servicio__text'>{text}</p>
    </>
  )
}

export default Servicio