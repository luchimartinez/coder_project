/* import Item from '../Item/Item'

const ItemList = ({products}) => {

    return(
        <div className='itemListContainer'>
            {products.map((product)=>(
                <Item key = {product.id} {...product}/>
            ))}
        </div>
    )
}

export default ItemList */

import Item from "../Item/Item"
/* import './ItemList.css'; */

const ItemList = ({products}) => {
    return(
    <div className="Item-list">
        {products.map((product)=>
        <Item product={product} key={product.id}/>
    )}
    </div>

)
}
export default ItemList