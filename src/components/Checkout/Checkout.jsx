import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import { db } from '../../firebase/config';


const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: ""
  })
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(values.nombre.length < 2){
      alert("Nombre Invalido")
      return
    }
    if(values.direccion.length < 2){
      alert("Direccion Invalida")
      return
    }
    if(values.email.length < 2){
      alert("Email Invalido")
      return
    }
    if(values.email != values.emailVerify){
      alert("Emails No Coinciden")
      return
    }
    const orden = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fecha: new Date()
    }
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, orden)
      .then((doc) => {
        setOrderId(doc.id)
        emptyCart()
      })
      .catch((error) => console.log(error))
  }
  if(orderId){
    return(
      <div className="container my-5">
        <h2>Tu compra ha sido exitosa</h2>
        <hr/>
        <p>Tu codigo de compra es: {orderId}</p>
        <Link to={"/"} className="btn btn-success">Volver</Link>

      </div>
    )
  }
  if (cart === 0) {
    return <Navigate to={"/"}/>
  }
  return (
    <div className="container my-5">
        <h2>Terminar mi compra</h2>
        <hr/>
        <h3>Total Carrito</h3>
        <p>${totalCart()}</p>
        <br/>
        <h2>Escribe tus datos</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="text"
            name="nombre"
            value={values.nombre}
            placeholder="Tu nombre"
          />
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="text"
            name="direccion"
            value={values.direccion}
            placeholder="Tu direccion"
          />
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="email"
            name="email"
            value={values.email}
            placeholder="Tu email"
          />
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="email"
            name="emailVerify"
            value={values.emailVerify}
            placeholder="Repite tu email"
          />
          <button className="btn btn-primary">Ordenar</button>
        </form>
    </div>
  )
}

export default Checkout