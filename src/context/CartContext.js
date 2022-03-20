import { createContext, useState,useEffect} from "react";

const Context  = createContext()


export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
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
        let res = cart.filter((p) => p.id !== id)
        setCart(res)
    })

    const clear = () => {
        setCart([])
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

    const getTotal = () =>{
        let count = 0
        cart.forEach(prod =>{
            count = count + prod.price
        })
        return count.toFixed(2)
    }

    const getQuantity = () =>{
        let count = 0
        cart.forEach(prod =>{
            count = count + prod.quantity
        })
        return count
    }

    return (
        <Context.Provider value={{
            cart,
            addItem, 
            removeItem,
            clear,
            getTotal,
            getQuantity}}>
            {children}
        </Context.Provider>
    )
}

export default Context