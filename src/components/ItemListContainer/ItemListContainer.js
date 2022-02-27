import ItemList from  "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from '../../asyncmock'
import  {useEffect, useState} from 'react'
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    
     useEffect(()=>{
        getProducts.then((products) => {
            setProducts(products)
            console.log(products)
            setLoading(false)
        })
        .catch((error) =>{
            console.log(error)
        }) 
    },[categoryId ==='Home']) 

    useEffect(()=>{
        getProductsByCategory(categoryId).then((products)=>{
            setLoading(false)
            setProducts(products)
        })
    },[categoryId])

    return(
        
        <div>
            {loading ? <h1 className="typewriter">Cargando.....</h1>:  <ItemList products={products}/>}
        </div>
        
    )
}

export default ItemListContainer; 