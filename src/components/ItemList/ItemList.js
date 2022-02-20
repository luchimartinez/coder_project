import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products, routing}) => {
    return(
        <div className='container'>
        {products.map((product)=>(
            <Item key = {product.id} product={product} routing={routing}/>
        ))}
        </div>
    )
}

export default ItemList