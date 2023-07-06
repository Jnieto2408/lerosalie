import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }
    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
    const emptyCart = () => {
        setCart([])
    }
    const totalCart = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    const removerItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }
    return(
        <CartContext.Provider value={{ cart, agregarAlCarrito, isInCart, emptyCart, totalCart, removerItem, totalCantidad }}>
            {children}
        </CartContext.Provider>
    )
}