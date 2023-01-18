import React from "react"
import "./Item.css"
import{ Link } from "react-router-dom"

const Item = ({element}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{element.name}</h2>
                <img className="card-img" src={element.img}alt="" />
                <h3>${element.price}</h3>
                <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item;