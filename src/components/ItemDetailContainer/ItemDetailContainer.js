import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb,'products',productId)

        getDoc(docRef).then(response=>{ 
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  product={product}/>
        </div>
    )    
}
export default ItemDetailContainer