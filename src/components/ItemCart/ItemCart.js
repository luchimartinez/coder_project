import './ItemCart.css'
import Context from '../../context/CartContext'
import { useContext } from 'react'

export const ItemCart = ({name, quantity, id, imgfront}) =>{
    const {removeItem} = useContext(Context)
    return(
        <div className='itemDiv'>
            <img src={imgfront}/>
            <h3>{name}</h3>
            <h3>Cantidad: {quantity}</h3>
            <button onClick={()=>removeItem(id)}>Eliminar</button>
    </div>
    )

}