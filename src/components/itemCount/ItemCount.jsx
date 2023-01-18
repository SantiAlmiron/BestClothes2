import { useEffect, useState } from "react";
import { Button } from "@mui/material"


const ItemCount = ({stock, initial=1, onAdd }) =>{

    const [counter, setCounter] = useState(initial)

    useEffect(()=> {
    setCounter(initial)}, [initial] 

    )

    const increment = () => {
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }



    return (
        <div>
            <h2>{ counter }</h2>
            <Button type="submit" variant="contained" onClick={increment}>+</Button>
            <Button type="submit" variant="contained" onClick={decrement}>-</Button>
            <Button type="submit" variant="contained"  onClick= {()=>{ onAdd(counter)} }>Agregar al carrito</Button>
        </div>

    )
}

export default ItemCount