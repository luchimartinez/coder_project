import './Item.css'
import ItemCount from "../ItemCount/ItemCount"

const Item = (key, name, price, img, stock)=> {

    const addToCart = (number) => {
        console.log(`Se agregaron al carrito ${number} items`)   
      }

    return(
        <div className="itemContainer">
            <div className="name">
                <h4>{name}</h4>
                <img src={img}/>
                <p>{price}</p>
            </div>
            <div className="productDetails">
                <button>Ver detalle de producto</button>
                <p>Stock disponible: {stock}</p>
            </div>
            <ItemCount stock={stock} initial={1} onAdd={addToCart}/>
        </div>
    )
} 

export default Item