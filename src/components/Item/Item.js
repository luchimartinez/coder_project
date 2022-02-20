import './Item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = ({product,routing})=> {

    const addToCart = (number) => {
        console.log(`Se agregaron al carrito ${number} items`)   
      }

    return(
        <div className="itemContainer">
            <div className="name">
                <h4>{product.name}</h4>
                <img src={product.imgfront}/>
                <p>{product.price}</p>
            </div>
            <div className="productDetails">
                <button className='info_btn' onClick= {() => routing({path: 'detail', id: product.id})}>Ver detalle de producto</button>
{/*                 <p>Stock disponible: {stock}</p> */}
            </div>
{/*             <ItemCount stock={stock} initial={1} onAdd={addToCart}/> */}
        </div>
    )
} 

export default Item