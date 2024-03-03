/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Whatsapp from "../WhatsAppIcon/Whatsapp"


const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Whatsapp />
      <Footer />
    </>
  )
}
export default Layout