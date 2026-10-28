import { useState } from "react";


export default function Expression(){
    const [fruitColor,setFruitColor]=useState("Orange")
    const [color,setColor]=useState(true)
    return(
        <>
        <div className={color ? "d-block" :"d-none"}>
            <p>The name of the fruit is <b>{fruitColor}</b></p>
            <p>The Color of the fruit is orange</p>
        </div>
        </>
    )
}