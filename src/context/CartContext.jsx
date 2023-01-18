import { createContext, useState } from "react";


export const CartContext = createContext()


const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState( [] )
    
    const addToCart = ( element )=>{

        if( isInCart(element)) { 

            let newArray = cart.map((product) =>  {
                if (product.id === element.id) {
                    let newProduct = {
                        ...product,
                        quantity: element.quantity,
                    }
                    return newProduct
                }else{
                    return product
                }

            })

            setCart(newArray)

        }else{
        
            
        setCart([...cart, element])
    }
    }


    const isInCart = (Item) =>{
        return cart.some( elemento => elemento.id === Item.id)
    }

    const clearCart = ()=>{
        setCart([])
        
    }

    const getQuantityBiId = (id) => {
        const product = cart.find (elemento => elemento.id === id )
        return product?.quantity
    }

    const getTotalPrice = () => {

        const total = cart.reduce((acc, element)=>{
            return acc + (element.price * element.quantity)
        }, 0 )

        return total
    }

    const getTotalProduct = () => {

        const totalProducts = cart.reduce((acc, element)=>{
            return acc + (element.quantity)
        }, 0 )

        return totalProducts
    }
    

    const deleteProductById = (id)=>{

        const newArray = cart.filter( product => product.id !== id )
    
        setCart( newArray )
    
      }

    const data = {

        cart, 
        addToCart,
        clearCart,
        getQuantityBiId,
        getTotalPrice,
        deleteProductById,
        getTotalProduct
        
    }

    return (

        <CartContext.Provider value= { data }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider