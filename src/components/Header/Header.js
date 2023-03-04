import styled from "styled-components"
import "./Header.css"
import logo from "../../img/logo.svg"
import { BsBag, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs" 
import BurgerButton from "../BurgerButton/BurgerButton";
import { useEffect, useState } from "react";




const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    window.matchMedia("(max-width: 768px)").matches
      ? setClicked(!clicked)
      : setClicked(false)
  }
  useEffect(() => {
    const handleResize = () => {
      setClicked(false)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.addEventListener("resize",handleResize)
    } 
  },[])
    return (
        <>
          <NavContainer>
            <div className="burger">
            <BurgerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <img src={logo} alt="logo lerosalie"/>
            <div className="headerwrap">
              <div className={`links ${clicked ? "active" : ""}`}>
                <div>
                  <a href="#h" onClick={handleClick}>Productos</a>
                  <a href="#h" onClick={handleClick}>Espacios</a>
                  <a href="#h" onClick={handleClick}>Nosotros</a>
                  <a href="#h" onClick={handleClick}>Ciudades</a>
                </div>
                <div className="social">
                    <BsTiktok size={30}/>
                    <BsInstagram size={30}/>
                    <BsWhatsapp size={30}/>
                </div>
              </div>
              <div className="cart">
                <BsBag size={30}/><sup>1</sup>
              </div>
            </div>
            <BgDiv className={`${clicked ? "active" : ""}`}></BgDiv>
          </NavContainer>
        </>
    )
}


export default Header

const NavContainer = styled.nav`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
  .burger{
    @media(min-width: 768px){
      display: none;
      }
  }
  img{
    padding: 0.5rem;
    @media (max-width: 280px) {
      height: 5vh;
    }
  }
  .headerwrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .links{
      position: absolute;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      a{
        color: white;
        font-size: 2rem;
        display: block;
        text-decoration: none;
        margin-right: 2rem;
      }
      .social{
        display: none;
      }
      @media(min-width: 768px){
        position: initial;
        margin: 0;
        display: block;
        a{
          font-size: 1rem;
          color: white;
          display: inline;
        }
      }
    }
    .links.active{
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 6rem;
      left: 0;
      right: 0;
      text-align: center;
      a{
        font-size: 2rem;
        padding: 2.5vh;
        color: white;
      }
      a:hover{
        background-color: darkred;
      }
      .social{
        display: flex;
        justify-content: space-around;
        margin-top: 10vh;
        color: white;
      }
    }
    .cart{
      margin-right: 1rem;
      color: white;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  left: -2000px;
  bottom: 0;
  transition: all .6s ease;
  &.active{
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`