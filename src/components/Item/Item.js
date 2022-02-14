import './Item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = (key, ...product)=> {

    const addToCart = (number) => {
        console.log(`Se agregaron al carrito ${number} items`)   
      }

    return(
        <div className="itemContainer">
            <div className="name">
                <h4>{product.name}</h4>
                <img src={product.img}/>
                <p>{product.price}</p>
            </div>
            <div className="productDetails">
                <button>Ver detalle de producto</button>
                <p>Stock disponible: {product.stock}</p>
            </div>
            <ItemCount stock={product.stock} initial={1} onAdd={addToCart}/>
        </div>
    )
} 

export default Item