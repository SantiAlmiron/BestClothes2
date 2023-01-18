import { Button } from "@mui/material"
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css"

const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  return (
    <div key={item.id}  >
      <div className="cart">
        <div className="cart_description">
          <h2>{item.name}</h2>
          <img src={item.img} alt="" className="cart_img" />
          <h2>${item.price}.</h2>
          <h2>Unidades: {item.quantity}</h2>
        </div>
        <div className="cart_button">
          <Button  variant="contained" onClick={()=>deleteProductById(item.id)}>Quitar</Button>
        </div>
      </div>
      <hr />
    </div>
   
  )
}

export default CartItem