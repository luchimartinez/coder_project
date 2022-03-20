import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (e) => {
        if (e < product?.stock){
            setQuantity(e)
        }

    }

    useEffect(() => {
        if (quantity < product?.stock ){
            setIsActive(true)
            addItem(product,quantity)
        }
    }, [quantity])

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
            </header>
            <picture>
                <img src={product?.imgfront} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
{                <p className="Info">
                    Descripción: {product?.description}
                </p>}
                <p className="Info">
                    Precio: {product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {(!isActive)? <ItemCount stock={product?.stock} initial={1} onAdd={handleOnAdd} /> : <NavLink to='/cart' className='addToCart'>Ver Carrito</NavLink> }
            </footer>
        </article>
    )
}

export default ItemDetail