import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/logo.svg"
import "./navigation.css"
import { BsWhatsapp, BsTiktok, BsInstagram } from "react-icons/bs";
import { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';

function Navigation() {
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsBurgerMenuVisible(window.innerWidth <= 991);
    };

    setIsBurgerMenuVisible(window.innerWidth <= 991);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Navbar key="lg" expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container fluid>
        <Container className='d-flex justify-content-around align-items-center'>
          {
            isBurgerMenuVisible && (
              <CartWidget/>
              )
          }
          <Navbar.Brand href="/"><img src={logo} alt="LeRosalie Logo" className='logo-rosalie'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className='burger-icon' />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className="burger-icon"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`justify-content-end  flex-grow-1 pe-3 gap-2 ${isBurgerMenuVisible ? "offcanvas-navbar" : "align-items-center"}`}>
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/rosas">Nuestras Rosas</Nav.Link>
                <Nav.Link href="/nosotros">Quienes Somos</Nav.Link>
                <Nav.Link href="/q&a">Preguntas Frecuentes</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
              {
                !isBurgerMenuVisible && (
                  <CartWidget/>
                )
              }
              </Nav>
              {
                isBurgerMenuVisible && (
                  <Container className='mt-4 d-flex gap-5 justify-content-center'>
                    <a href='https://www.tiktok.com/@lerosalie.co/' target={"_blank"} rel={"noopener noreferrer"} style={{ color: "inherit", textDecoration: "none" }}>
                      <BsTiktok size={30} />
                    </a>
                    <a href='#whatsapp' target={"_blank"} rel={"noopener noreferrer"} style={{ color: "inherit", textDecoration: "none" }}>
                      <BsWhatsapp size={30} />
                    </a>
                    <a href='https://www.instagram.com/lerosalie.co/' target={"_blank"} rel={"noopener noreferrer"} style={{ color: "inherit", textDecoration: "none" }}>
                      <BsInstagram size={30} />
                    </a>
                  </Container>
                )
              }
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Container>
    </Navbar>
  );
}

export default Navigation;
