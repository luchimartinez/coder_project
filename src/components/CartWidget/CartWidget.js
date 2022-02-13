import carrito from "../Imagenes/carrito.png"
import "./CartWidget.css"

const Cartwidget = ({color}) => {
    return (
        <div className = "carritoSection" style ={{backgroundColor : color}}>
            <img src = {carrito} width = "80px"/>
            <p>0</p>
        </div>
    )
}

export default Cartwidget;