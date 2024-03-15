import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import './HeaderStyle.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />  
        <Navbar />
      </div>
    </header>
  )
}
export default Header