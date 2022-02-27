import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const [isActive, setIsActive] = useState(false)

    const handleOnAdd = (e) => {
        if (e < product?.stock){
            console.log("esto vale e", e)
            setQuantity(e)
        }

    }

    useEffect(() => {
        console.log("esto vale quantity",quantity)
        if (quantity < product?.stock ){
            setIsActive(true)
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