import { Card, Button } from "react-bootstrap"
import './item.css'
import { Link } from "react-router-dom"

const Item = ({name, image, description, price, category, id}) => {
  return (
    <div>
        <Card className='initialCard'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Category: {category}</Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex gap-4 justify-content-center">
                <p>Precio: <b>${price}</b></p>
          <Link to={`/detail/${id}`}><Button>Ver mas</Button></Link>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default Item
