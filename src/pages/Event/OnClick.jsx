import { useState } from "react"

export default function OnClick(){

    const [message,setMessage]=useState(" ")

    return(
        <>
           <div className="text-center text-primary">
               Message
            </div>

            <div className="container">

                   <div>{message}</div>

                   <div className="btn btn-primary" 
                        onClick={()=>{
                            setMessage("Welcome to React!")
                        }}>Show Message
                    </div>

                    <div className="btn btn-primary" 
                        onClick={()=>{
                            setMessage("Hello Reshma!")
                        }}>Say Hello!
                    </div>

            </div>
            
        </>
    )
}