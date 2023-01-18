import "./NavBar.css"
import futbol from "../img/futbol.png"
import CartWidgets from "./cartWidgets/CartWidgets"
import{ Link } from "react-router-dom"

export const NavBar = ()=>{

    return(
        <div className="NavBar">
            <div >
            <Link to="/">  <img className="logo" src={futbol} alt="" /> </Link>
            </div>
            <ul className="Menu">
                <Link to="/">Home</Link>
                <Link to="/category/camisetas">Camisetas</Link>
                <Link to="/category/championes">Championes</Link>
            </ul>
            <div >
                <CartWidgets />
            </div>
        </div>
    )
}

export default NavBar;