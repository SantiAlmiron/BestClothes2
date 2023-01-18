import { useContext, useState, useEffect} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from "../cartItem/CartItem"
import { Button } from "@mui/material"
import Form from "../form/Form"
import { Link } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import Orders from "../orders/Orders"
import "./Cart.css"



const Cart = () => {
    const { cart, clearCart, getTotalPrice, getTotalProduct } = useContext( CartContext)

    const [buy, setBuy] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const [order, setOrder] = useState({})


    const openForm = () => {
        if (cart.length > 0) {
          setBuy(true)
        } else {
          alert("No hay productos en el carrito")
        }
      }
    
      useEffect(() => {

        if (orderId) {
          const orderCollection = collection(db, "orders")
          const ref = doc(orderCollection, orderId)
    
          getDoc(ref).then((res) => {
            setOrder({
              id: res.id,
              ...res.data(),
            })
          })
        }
      }, [orderId])


    if (orderId) {
        return (
          <div>
            <h1>Tu orden de compra es : {orderId}</h1>
            <Orders order={order} />

            <Link to={"/"}>Volver a comprar</Link>
          </div>
        )
      }

      if(cart.length < 1 ) {
        return <h2>El carrito está vacío</h2>
    }
    
      return (
        <div >
          <div>
         {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        
            ))}
    
          </div>
    
          <div className="cart-info">
            <h3>Cantidad de productos:{getTotalProduct()} </h3>
            <h3>
              Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}
            </h3>
    
            {buy ? (
              <Form
                cart={cart}
                getTotalPrice={getTotalPrice}
                setOrderId={setOrderId}
                clearCart={clearCart}
              />
            ) : (
              cart.length > 0 && (
                <div >
                  <Button variant="contained" onClick={openForm}>
                    Comprar
                  </Button>
                  <Button onClick={() => clearCart()} variant="contained">
                    Vaciar carrito
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      )
    }

export default Cart