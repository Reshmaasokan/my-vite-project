import { useState } from "react"
import fullappleimage from '../assets/fullappleimage.jpg'
import halfappleimage from '../assets/halfappleimage.jpg'
export default function A_ternaryOperator(){

    const [display,setDisplay]=useState(true)

    const displayDetails=()=>{
         setDisplay(!display)
    }

    return(
        <>
        <div className="h1 text-success text-center fw-bold">Apple status</div>
        
        <div className="card m-5" style={{width:"200px"}}>
            <div className="card-title text-center fw-bold text-danger">Apple</div>
            
            <div className="card-image">
                {display?
                (
                    <img src={fullappleimage} 
                      height={200}
                      width={200}
                      alt={"Apple"}
                    />
                )
                :
                (
                    <img src={halfappleimage} 
                      height={200}
                      width={200}
                      alt={"Apple"}
                    />
                )
                }
            </div>
            <div className="btn btn-primary" onClick={displayDetails}>Click</div>

        </div>
        
        </>
    )
}