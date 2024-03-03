import { Link } from 'react-router-dom'
import logo from '../../../../assets/img/Logo/logo1.png'
import "./LogoStyle.css"
const Logo = () => {
  return (
    <Link to="/" className='logo'>
      <img src={logo} alt="Logo LG Reparaciones" className='logo__img' />
      <h1 className='logo__title'>LG REPARACIONES</h1>
    </Link>
  )
}
export default Logo