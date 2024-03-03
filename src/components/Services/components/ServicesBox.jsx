import './ServicesBoxStyle.css'
const ServicesBox = ({contentData}) => {
  return (
    <div className="s-box " >
      {contentData.map((content, index) => (
          <div key={index} >
            <h3  className="content-2__title">
              {content.title}
            </h3>
                {content.list.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}     
          </div>
        ))}
    </div>
  )
}
export default ServicesBox