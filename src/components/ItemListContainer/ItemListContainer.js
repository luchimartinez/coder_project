import ItemList from  "../ItemList/ItemList"
import { getProducts } from '../../asyncmock'
import  {useEffect, useState} from 'react'

const Catalogue = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getProducts.then((res) => {
            setProducts(res)
            console.log(res)
            setLoading(false)
        })
        .catch((error) =>{
            console.log(error)
        })   
    },[])

    return(
        
        <div>
            {loading ? <h1>Cargando...</h1>:  <ItemList products={products}/>}
        </div>
        
    )
}

export default Catalogue; 