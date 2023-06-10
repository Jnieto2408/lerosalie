import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const ItemDetail = ({name, category, image, description, price}) => {

  const navigate = useNavigate()
  const handleVolver = () => {
    navigate(-1)
  }
  return (
    <div>
      <h2>{name}</h2>
      <img src={image}/>
      <br/>
      <small>Category: {category}</small>
      <p>{description}</p>
      <p>Precio: ${price}</p>
        <Button className="btn btn-primary" onClick={handleVolver}>Volver</Button>
    </div>
  )
}

export default ItemDetail
