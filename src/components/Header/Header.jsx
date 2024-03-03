import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import './HeaderStyle.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />  
      <Navbar />
    </header>
  )
}
export default Header