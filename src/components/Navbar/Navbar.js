import './Navbar.css'
import logo from "../Imagenes/logo.png"
import Cartwidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



const Navbar = () => { 
  return(
      <nav className = 'Navbar'>
        <div className = "nav-logo">
          <img src = {logo} width = "80px"/>
          <span>Pokemon Store</span>
        </div>
          <div className ="nav-items">
{              <NavLink to={'/category/Home'} className='category' >Home</NavLink> }
              <NavLink to={'/category/Peluches'} className='category'>Peluches</NavLink>
              <NavLink to={'category/Ropa'}className='category'>Ropa</NavLink>
              <NavLink to={'category/Deco'}className='category'>Deco</NavLink>
          </div>
          <Cartwidget color="#fd946e"/>
      </nav>
    )
  }


  export default Navbar