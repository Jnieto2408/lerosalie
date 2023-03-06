import "./layout.css"
import { Route, Routes } from "react-router-dom"
import Checkout from "../Checkout/Checkout"
import Footer from "../Footer/Footer"
import Cart from "../Cart/Cart"
import Header from "../Header/Header"
import Carousel from "../Carousel/Carousel"
import Item from "../Item/Item"



const Layout = () => {
    return(
        <div className="layout">
            <Header/>
                <Routes>
                   <Route path="/" element={<Carousel/>}/> 
                   <Route path="/cart" element={<Cart/>} />
                   <Route path="/item" element={<Item/>} />
                   <Route path="/checkout" element={<Checkout/>} />
                </Routes>
            <Footer/>
        </div>
    )
}

export default Layout