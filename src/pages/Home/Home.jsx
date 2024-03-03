import CardCourses from "../../components/Card-Courses/CardCourses"
import Form from "../../components/Form/Form"
import Hero from "../../components/Hero/Hero"
import Redes from "../../components/Redes/Redes"
import Services from "../../components/Services/Services"
import Testimonios from "../../components/Testimonios/Testimonios"

const Home = () => {
  return (
    <>
      <Hero />
      <CardCourses />
      <Services />
      <Form />
      <Testimonios />
      <Redes />
    </>
  )
}
export default Home