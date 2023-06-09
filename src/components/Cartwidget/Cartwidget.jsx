import "./cartwidget.css"
import { BsBag } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className='cart'>
        <BsBag size={25} /><sup>(1)</sup>
    </div>    
  )
}

export default CartWidget
