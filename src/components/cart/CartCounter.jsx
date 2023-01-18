import React from 'react'
import { CartContext } from "../../context/CartContext"
import { useContext} from "react"

const CartCounter = () => {

    const { cart, getTotalProduct } = useContext(CartContext)

    if(cart.length > 0 ) {
return (
    
    <span>{getTotalProduct()}</span>
    
) }

}


export default CartCounter