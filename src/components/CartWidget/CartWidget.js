import carrito from "../Imagenes/carrito.png"
import "./CartWidget.css"
import { Link } from "react-router-dom"
import Context from "../../context/CartContext"
import { useContext } from "react"

const Cartwidget = ({color}) => {

    const {getQuantity} = useContext(Context)

    return (
        <div>
            {getQuantity()!==0&& 
            <Link to={'/cart'} className="carritoSection" style={{backgroundColor : color}} >
                <img src = {carrito} width = "80px"/>
                {getQuantity()}
            </Link>
}
        </div>
    )
}

export default Cartwidget;