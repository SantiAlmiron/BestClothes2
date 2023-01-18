import React from "react";
import Item from "../item/Item"
import "./ItemList.css"

const ItemList = ({items}) => {
    return (
        <div className="home">
            {items.map((element)=> {
                return <Item key={element.id} element={element} />
            ;
         })}
        </div>
    )
}

export default ItemList