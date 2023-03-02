import { Link } from "react-router-dom"
import "./Header.scss"


const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="primary-nav">
                    <div className="primary-nav-container">
                        <div className="nav-items">
                            <div className="nav-item toggle">
                                <span>
                                    <div className="menu-toggle-btn">
                                        <span></span>
                                    </div>
                                </span>
                            </div>
                            <div className="nav-item logo"><span>LeRosalie</span></div>
                            <div className="nav-item cart">
                                <span>cart</span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-links">
                        <div className="nav-info">Informacion o promociones</div>
                        <div className="nav-links-wrapper">
                            <div className="nav-link">
                                <Link>Compra Ya<span>icon</span></Link>
                            </div>
                            <div className="nav-link">
                                <Link>Como funciona<span>icon</span></Link>
                            </div>
                            <div className="nav-link">
                                <Link>Nosotros<span>icon</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Header