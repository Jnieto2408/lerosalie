import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function CategoryButton() {
    return (
        <ButtonGroup aria-label="Basic example" className='d-flex justify-content-center m-3 gap-2'>
            <Link to={"/productos"}><Button variant="primary">Todos</Button></Link>
            <Link to={"/productos/limpieza"}><Button variant="secondary">Limpieza</Button></Link>
            <Link to={"/productos/verduleria"}><Button variant="secondary">Verduleria</Button></Link>
            <Link to={"/productos/carniceria"}><Button variant="secondary">Carniceria</Button></Link>
            <Link to={"/productos/panaderia"}><Button variant="secondary">Panaderia</Button></Link>
            <Link to={"/productos/perfumeria"}><Button variant="secondary">Perfumeria</Button></Link>
        </ButtonGroup>
    );
}

export default CategoryButton;