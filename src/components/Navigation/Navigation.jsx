import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/logo.svg"
import "./navigation.css"
import { BsWhatsapp, BsTiktok, BsInstagram } from "react-icons/bs";
import { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

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
          <Link to="/"><img src={logo} alt="LeRosalie Logo" className='logo-rosalie'></img></Link>
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
              <Nav className={`justify-content-end  flex-grow-1 pe-3 gap-3 ${isBurgerMenuVisible ? "offcanvas-navbar" : "align-items-center"}`}>
                <Link to="/" className='links'>Inicio</Link>
                <Link to="/rosas" className='links'>Nuestras Rosas</Link>
                <Link to="/nosotros" className='links'>Quienes Somos</Link>
                <Link to="/q&a" className='links'>Preguntas Frecuentes</Link>
                <Link to="/contacto" className='links'>Contacto</Link>
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
