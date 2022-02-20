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
              <buton className='info_btn'><NavLink to={`/detail/${product.id}`}>Ver detalle</NavLink></buton>
                {/* <button className='info_btn' onClick= {() => routing({path: 'detail', id: product.id})}>Ver detalle de producto</button> */}
{/*                 <p>Stock disponible: {stock}</p> */}
            </div>
{/*             <ItemCount stock={stock} initial={1} onAdd={addToCart}/> */}
        </div>
    )
} 

export default Item