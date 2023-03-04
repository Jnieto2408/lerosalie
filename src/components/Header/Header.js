import styled from "styled-components"
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState } from "react";




const Header = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
    return (
        <>
          <NavContainer>
            <h1>Le<span>Rosalie</span></h1>
            <div className={`links ${clicked ? "active" : ""}`}>
              <a href="#h" onClick={handleClick}>Link 1</a>
              <a href="#h" onClick={handleClick}>Link 2</a>
              <a href="#h" onClick={handleClick}>Link 3</a>
              <a href="#h" onClick={handleClick}>Link 4</a>
              <a href="#h" onClick={handleClick}>Link 5</a>
            </div>
            <div className="burger">
            <BurgerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
          </NavContainer>
        </>
    )
}


export default Header

const NavContainer = styled.nav`
  h1{
    font-weight: 400;
    color: white;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
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
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: -1500px;
  left: -1500px;
  transition: all .6s ease;
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`