import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import{ FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


const Cart = () => {
    const {cart, emptyCart, totalCart, removerItem} = useContext(CartContext)

    if (cart.length === 0){
      return(
        <div className="container my-5">
            <h2>Tu carrito esta vacio</h2>
            <hr/>
            <p>Vuelve al inicio</p>
            <Link to="/" className="btn btn-primary">Volver</Link>
        </div>
      )
    }
  return (
    <div className="container my-5">
      {
        <>
          <h2>Tu compra</h2>
          <hr/>
          {
            cart.map(item => (
              <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.price * item.cantidad}</p>
                    <button className="btn btn-outline-danger" onClick={() => removerItem(item.id)}><FaTrashAlt/></button>
                    <hr/>
                </div>
            ))
          }
        </>
      }
      <h4>Total: ${totalCart()}</h4>
      <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
