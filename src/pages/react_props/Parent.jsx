import Child from "./Child"
import { useState } from "react"
export default function Parent(){
    const name="HeadPhones"
    const [quantity, setQuantity]=useState(1)
    const increaseQuantity=(item)=>{
        setQuantity(prevQuantity=>prevQuantity+item)
    }

    const decreaseQuantity=(item)=>{
        if(quantity>1){
          setQuantity(prevQuantity=>prevQuantity-item)
        }
        else if(quantity<=1){
            setQuantity(1)
        }
        
    }

    const resetQuantity=()=>{
        setQuantity(1)
    }
    return(
        <>
          <Child
          name={name}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          resetQuantity={resetQuantity}/>
        </>
    )
}