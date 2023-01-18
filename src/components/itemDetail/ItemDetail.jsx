import React, { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2"



const ItemDetail = ({ product } )=>{

  const { addToCart, getQuantityBiId } =  useContext(CartContext)
    

    const onAdd = ( quantity ) =>{

        addToCart(
            {
                ...product,
                quantity: quantity
            }
        )

        Swal.fire({
            title: "Operacion Exitosa!",
            text: "Agregaste un producto al carrito!",
            icon: "success",
            button: "Ok",
          })
            }
      

    const quantity = getQuantityBiId(product.id)

    return(
        <div>
            <div>
                <h2>{ product.name }</h2>
                <h2>{ product.description }</h2>
                <h2>{ product.price }</h2>
               
            </div>

            <ItemCount onAdd={onAdd} stock={ product.stock} initial={ quantity}/>
        </div>


    )

}

export default ItemDetail