import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, name, category, image, description, price, stock}) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1)
  const navigate = useNavigate()
  const handleVolver = () => {
    navigate(-1)
  }
  const handleAgregar = () => {
    const item = {
      id,
      name,
      category,
      image,
      description,
      price,
      stock,
      cantidad
    }
    agregarAlCarrito(item)
  }
  return (
    <div>

      {
        name == undefined
        ?
          <h2>Este item no se encuentra disponible</h2>
        :
          <>
            <h2>{name}</h2>
            <img src={image}/>
            <br/>
            <small>Category: {category}</small>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            {
              !isInCart(id)
                ?<ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={handleAgregar}/>
                :<Link to={"/cart"} className="btn btn-success">Terminar mi compra</Link>
    
            }
          </>

      }
        <hr/>
        <Button className="btn btn-primary" onClick={handleVolver}>Volver</Button>
    </div>
  )
}

export default ItemDetail
