import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import Item from '../Item/Item'

const ItemDetail = ({ product }) => {
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
                <ItemCount/>
            </footer>
        </article>
    )
}

export default ItemDetail