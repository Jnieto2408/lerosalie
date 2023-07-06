import { useContext } from "react";
import "./cartwidget.css"
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {totalCantidad} = useContext(CartContext)
  return (
    <Link to={"/cart"} className='cart'>
        <BsBag size={25} /><sup>{totalCantidad()}</sup>
    </Link>    
  )
}

export default CartWidget
