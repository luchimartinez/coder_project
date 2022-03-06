import './Cart.css'
import { useContext } from 'react'
import Context from '../../context/CartContext'
import { ItemCart } from '../ItemCart/ItemCart'
import { NavLink } from 'react-router-dom'

export const Cart = () =>  {
    
    const {cart, getTotal} = useContext(Context)

    if (cart.length === 0){
        return (
            <>
                <h1>No selecciono ningun producto</h1>
                <NavLink to='/category/Home' className='backToHome'>Volver</NavLink>
            </>
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
        </>
    )
}