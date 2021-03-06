import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [number, setNumber] = useState(1)
    
    const increment = () => {
        if (number < stock){
            setNumber(number +1)
        }
    }

    const decrement = () => {
        if (number > initial){
            setNumber(number- 1)
        }
    }

    return(
        
        <div>
            <div className='item-container'>
                <div className='div-buttons'>
                    <button className='btn-count' onClick={increment}>+</button>
                    <p className='count'>{number}</p>
                    <button className='btn-count' onClick={decrement}>-</button>
               </div>
               <div className='addToCart'>
               <button className='btn-cart' onClick={()=>onAdd(number)}>Add To Chart</button>
               </div>
            </div>

        </div>


    )
}

export default ItemCount