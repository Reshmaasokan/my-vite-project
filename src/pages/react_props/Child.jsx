import { useState } from "react"
export default function Child({
    name,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    resetQuantity
})
{
    const[addItem,setAddItem]=useState(1)
    const[subItem,setSubItem]=useState(1)
    return(
        <>
        <div className="h3 text-center text-success fw-bold">Shopping Cart</div>
        <div>
            <span>Product :</span>
            <span>{name}</span>
        </div>
        <div>
            <span>Quantity :</span>
            <span>{quantity}</span>
        </div>
        <div className="btn-group">
            <button onClick={()=>{increaseQuantity(addItem)}}>Add to cart</button>
            <button onClick={()=>{decreaseQuantity(subItem)}}>Remove from cart</button>
            <button onClick={resetQuantity}>Reset</button>
        </div>
        </>
    )
}