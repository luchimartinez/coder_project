import './Cart.css'
import ContactForm from '../ContactForm/ContactForm'
import Context from '../../context/CartContext'
import { useContext, useRef, useState } from 'react'
import { ItemCart } from '../ItemCart/ItemCart'
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../firebase/firebase'
import Togglable from '../Togglable/Togglable'
import Swal from 'sweetalert2'
 
export const Cart = () =>  {
    
    const MySwal = (Swal)
    const {cart, getTotal, clear, removeItem} = useContext(Context)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ''
    })
    const contactFormRef = useRef()

    const confirmOrder = () => {
        if(contact.phone !== '' && contact.email !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)
            
            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []
            
            const ids = objOrder.items.map(i => i.id)

            getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => { 
                            batch.commit()
                            clear()
                            MySwal.fire({
                                title: 'Ok',
                                text: `La orden se genero exitosamente, su numero de orden es: ${id}`,
                                icon: 'success',
                              })
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            MySwal.fire({
                                title: 'Oops',
                                text: `El producto ${prod.name} no tiene stock disponible`,
                                icon: 'error',
                              })
                            removeItem(prod.id)
                        })    
                    }               
                }).catch((error) => {
                    MySwal.fire({
                        title: 'Oops',
                        text: `Algo paso, no se que :/`,
                        icon: 'error',
                      })
                }).finally(() => {
                    setProcessingOrder(false)
                })

        } else {
            MySwal.fire({
                title: 'Oops',
                text: `Debe completar los datos de contacto para generar la orden`,
                icon: 'error',
              })
        }
    }

    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }

    if(cart.length === 0) {
        return (
            <div>
                <h1>Cart</h1>
                <h2 className='typewriter'>No hay productos en el carrito</h2>
            </div>
        )
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
            {
                (contact.phone !== '' && contact.email !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Email: {contact.email}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', email: '', comment: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
        
                    </div>    
            }

            <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.email !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>          
        </>
    )
}