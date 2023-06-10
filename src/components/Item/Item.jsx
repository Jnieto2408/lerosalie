import { Card, Button } from "react-bootstrap"
import './item.css'

const Item = ({name, image, description, price}) => {
  return (
    <div>
        <Card className='initialCard'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex gap-4 justify-content-center">
                <p>Precio: <b>${price}</b></p>
                <Button>Ver mas</Button>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default Item
