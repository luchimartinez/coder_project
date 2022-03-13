import './Cart.css'
import { useContext, useRef, useState } from 'react'
import Context from '../../context/CartContext'
import { ItemCart } from '../ItemCart/ItemCart'
import { NavLink } from 'react-router-dom'
import {writeBatch, getDoc, doc, addDoc, collection} from 'firebase/firestore'
import { firestoreDb } from '../../firebase/firebase'
 

export const Cart = () =>  {
    
    const {cart, getTotal, clear} = useContext(Context)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        addres: '',
        comment: ''
    })
    const contactFormRef = useRef()

    const confirmOrder = () =>{
        setProcessingOrder(true)
        const objOrder = {
            buyer: {
                name: 'Pablito Sherman',
                phone: '123456789',
                addres: 'calle Walabi 42, Sidney'
            },
            items: cart,
            total: getTotal(),
            date: new Date()
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod=>{
            getDoc(doc(firestoreDb, 'products', prod.id)).then(response=>{
                if (response.data().stock >= prod.quantity){
                    batch.update(doc(firestoreDb,'products', response.id),{
                        stock: response.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({id: response.id, ...response.data()})
                }
            })
        })
        if (outOfStock.length === 0){
            addDoc(collection(firestoreDb, 'orders'),objOrder).then(({id}) =>{
                batch.commit().then(()=>{

                })
            })
        }
    }
    if (cart.length === 0){
        return (
            <>
                <h1>No selecciono ningun producto</h1>
                <NavLink to='/category/Home' className='backToHome'>Volver</NavLink>
            </>
        )
    }


    if (processingOrder) {
        return <h1 className='typewriter'>Procesando compra</h1>
    }

    return(
        <>
            <div className='containerCart'>
                {cart.map(prod=>{
                    return (
                        <ItemCart key={prod.id} {...prod}/>
                    )
                })}
            </div>
                <div className='totalDiv'>
                <h1>Total: ${getTotal()}</h1>
            </div>
            {(!processingOrder && cart.length > 0 ) &&<button className='btn-order' onClick={()=>confirmOrder()}>Confirmar compra</button>}
            {(!processingOrder && cart.length > 0 ) &&<button className='btn-cancel' onClick={()=>clear()}>Cancelar compra</button>}
            <button className='btn-contact' >Agregar contacto</button>
        </>
    )
}