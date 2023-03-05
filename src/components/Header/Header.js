import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../img/logo.svg"
import "./header.css"
import { BsWhatsapp, BsTiktok, BsInstagram } from "react-icons/bs";
import { useState, useEffect } from 'react';

function Header() {
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);
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
        <Navbar.Brand href="#home"><img src={logo} alt="LeRosalie Logo" className='logo-rosalie'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className='burger-icon'/>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`justify-content-end flex-grow-1 pe-3 ${isBurgerMenuVisible ? "offcanvas-navbar" : ""}`}>
                <Nav.Link href="/#h">Inicio</Nav.Link>
                <Nav.Link href="/#h">Nuestras Rosas</Nav.Link>
                <Nav.Link href="/#h">Preguntas Frecuentes</Nav.Link>
                <Nav.Link href="/#h">Quienes Somos</Nav.Link>
                <Nav.Link href="/#h">Contacto</Nav.Link>
              </Nav>
              {
                isBurgerMenuVisible && (
                  <Container className='mt-4 d-flex gap-5 justify-content-center'>
                    <a href='https://www.tiktok.com/@lerosalie.co/' target={"_blank"} rel={"noopener noreferrer"} style={{ color: "inherit", textDecoration: "none"}}>
                    <BsTiktok size={30}/>
                    </a>
                    <a href='#whatsapp' target={"_blank"} rel={"noopener noreferrer"} style={{ color: "inherit", textDecoration: "none"}}>
                    <BsWhatsapp size={30}/>
                    </a>
                    <a href='https://www.instagram.com/lerosalie.co/' target={"_blank"} rel={"noopener noreferrer"} style={{ color: "inherit", textDecoration: "none"}}>
                      <BsInstagram size={30}/>
                    </a>
                  </Container>
                )
              }
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;