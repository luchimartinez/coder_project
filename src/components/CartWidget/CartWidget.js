import carrito from "../Imagenes/carrito.png"
import "./CartWidget.css"

const Cartwidget = () => {
    return (
        <div className = "carritoSection">
            <img src = {carrito} width = "80px"/>
            <p>0</p>
        </div>
    )
}

export default Cartwidget;