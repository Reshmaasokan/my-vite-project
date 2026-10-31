import { useState } from "react"

export default function MainPage(){

    const [fruit,setFruit]=useState(["apple","mango","orange","pineapple"])

    return(
        <>
        <div>{fruit.map((value,index)=>{
            return(
                <>
                <table>
                    <thead>
                        s.no
                        name
                        action
                    </thead>
                </table>
                

                
                </>
            )
        })}</div>

        </>
    )
}