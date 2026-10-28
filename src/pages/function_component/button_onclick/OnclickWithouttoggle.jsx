import {useState} from "react"

export default function OnclickWithouttoggle(){
    const [display,setDisplay]=useState({
        message:"Hello User",
        usernmae:"!1234",
    })

    const changeDetails=()=>{
        setDisplay(
            {
                ...display,
                message:"Hello Reshma"
            }
        )
    }
    return(

        
        <>
        <div className="h2 text-center text-primary">Display Details</div>
        <div>
            <span className="text-danger fw-bold ms-5">Message: </span>
            <span>{display.message}</span>
        </div>

        <div>
            <span className="text-danger fw-bold ms-5">Username: </span>
            <span>{display.usernmae}</span>
        </div>
        <div>
             <button className="btn btn-primary ms-5 mt-3"
            onClick={changeDetails}>ChangeDetails</button>
        </div>

        </>
    )
}