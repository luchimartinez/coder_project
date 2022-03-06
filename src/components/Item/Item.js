import './Item.css'
import { NavLink } from 'react-router-dom'

const Item = ({product})=> {

    const addToCart = (number) => {
        console.log(`Se agregaron al carrito ${number} items`)   
      }

    return(
        <div className="itemContainer">
            <div className="name">
                <h4>{product.name}</h4>
                <img src={product.imgfront}/>
                <p>${product.price}</p>
            </div>
            <div className="productDetails">
              <button className='info_btn'>
                <NavLink to={`/detail/${product.id}`}>Ver detalle</NavLink>
              </button>
            </div>
        </div>
    )
} 

export default Item