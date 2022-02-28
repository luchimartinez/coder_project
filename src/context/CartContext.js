import { createContext, useState,useEffect} from "react";

const Context  = createContext()


export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log("esto vale cart",cart)
    }, [cart])

     const addItem = (product, quantity) => {

        const newProduct = {
            ...product,
            quantity
        }

        if (isInCart(product.id)){
            sumarCantidad(product, quantity)
        }else {
            setCart([...cart,newProduct])
        }
    }

    const isInCart =(id) => {
        return cart.some(p => p.id == id)
    }

    const removeItem = (id =>{
        let res = cart.filter(p => p.id != id)
        return(
            cart = res
        )
    })

    const clear = () => {
       return cart = []
    }

    const sumarCantidad = (product, quantity) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === product.id) {
                const newProduct = {
                    ...prod,
                    quantity: prod.quantity + quantity,
                };
                return newProduct
            } else {
                return prod
            }
        })
        setCart(newProducts)
    }

    return (
        <Context.Provider value={{cart, addItem, removeItem}}>
            {children}
        </Context.Provider>
    )
}

export default Context