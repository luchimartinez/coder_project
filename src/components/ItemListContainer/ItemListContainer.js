import ItemList from  "../ItemList/ItemList"
import  {useEffect, useState} from 'react'
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "../../firebase/firebase"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const collectionRef = categoryId ? 
            query(collection(firestoreDb, 'products'),where('category', '==', categoryId)):
            collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return {id:doc.id,...doc.data()}
            })
            setProducts(products)
        }).finally(()=>{
            setLoading(false)
        })

    },[categoryId] )

    return(
         
        <div>
            {loading ? <h1 className="typewriter">Cargando.....</h1>:  <ItemList products={products}/>}
        </div>
        
    )
}

export default ItemListContainer; 