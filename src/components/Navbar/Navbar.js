import './Navbar.css'
import logo from "../Imagenes/logo.png"
import Cartwidget from '../CartWidget/CartWidget';



const Navbar = ({ routing }) => { 

  const handlePeluches = () => {
    console.log('Peluches')
  }

  const handleRopa = () => {
    console.log('Ropa')
  }

  const handleDeco = () => {
    console.log('Deco')
  }

  return(
      <nav className = 'Navbar'>
        <div onClick={() => routing({ path: 'list', elid: 1})}></div>
        <div className = "nav-logo">
          <img src = {logo} width = "80px"/>
          <span>Pokemon Store</span>
        </div>
          <div className ="nav-items">
              <a>Home</a>
              <a onClick={handlePeluches}>Peluches</a>
              <a onClick={handleRopa}>Ropa</a>
              <a onClick={handleDeco}>Deco</a>
          </div>
          <Cartwidget color="#fd946e"/>
      </nav>
    )
  }


  export default Navbar