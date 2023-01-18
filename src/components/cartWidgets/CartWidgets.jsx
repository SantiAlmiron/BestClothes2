
import {GiShoppingCart} from "react-icons/gi"
import "./CartWidgets.css"
import { Link } from "react-router-dom"
import CartCounter from "../cart/CartCounter"



const CartWidgets = () => {

  return (
    <Link to="/cart">
      <div>
        <GiShoppingCart className="carrito"/>
        <div>
        <CartCounter/>
        </div>
      </div>
    </Link>
  )
}

export default CartWidgets