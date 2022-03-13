import './Navbar.css'
import logo from "../Imagenes/logo.png"
import Cartwidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import { getDocs,collection } from 'firebase/firestore';
import Context from '../../context/CartContext';
import { firestoreDb } from '../../firebase/firebase';



const Navbar = () => { 
  const [categories, setCategories] = useState([])
  const {products} = useContext(Context)

  useEffect(()=>{
    getDocs(collection(firestoreDb,'categories')).then(response=>{
      const categories = response.docs.map(cat=>{
        return {id: cat.id, ...cat.data()}
      })
      setCategories(categories)
    })
  },[])

  return(
      <nav className = 'Navbar'>
        <div className = "nav-logo">
          <img src = {logo} width = "80px"/>
          <span>Pokemon Store</span>
        </div>
          <div className ="nav-items">
            <NavLink to={'/'}>Home</NavLink>
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
          <Cartwidget color="#fd946e"/>
      </nav>
    )
  }


  export default Navbar