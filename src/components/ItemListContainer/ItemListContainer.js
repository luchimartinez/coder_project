import ItemList from  "../ItemList/ItemList"
import { getProducts } from '../../asyncmock'
import  {useEffect, useState} from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({routing}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getProducts.then((products) => {
            setProducts(products)
            console.log(products)
            setLoading(false)
        })
        .catch((error) =>{
            console.log(error)
        })   
    },[])

    return(
        
        <div>
            {loading ? <h1 className="typewriter">Cargando.....</h1>:  <ItemList products={products}  routing = {routing}/>}
        </div>
        
    )
}

export default ItemListContainer; 