import './Navbar.css'
import logo from "../Imagenes/logo.png"
import Cartwidget from '../CartWidget/CartWidget';
import Peluches from '../Pages/Peluches.js';
import Home from '../Pages/Home.js';
import Ropa from '../Pages/Ropa.js';
import Deco from '../Pages/Deco.js'; 


const Navbar = () => {
    return(
      <nav className = 'Navbar'>
        <div className = "nav-logo">
          <img src = {logo} width = "80px"/>
          <span>Pokemon Store</span>
        </div>
          <div className ="nav-items">
              <a href= {Home}>Home</a>
              <a href= {Peluches}>Peluches</a>
              <a href= {Ropa}>Ropa</a>
              <a href= {Deco}>Deco</a>
          </div>
          <Cartwidget/>
      </nav>
    )
  }


  export default Navbar