import { MainContext } from "../Context/globalcontext"
import { useContext } from "react"
export default function Home(){
    const data=useContext(MainContext)
    
    return(
        <>
           <div className="h1 text-center text-primary">Student Home Page</div>
           <p className="text-center mt-5 fs-4 fw-bold">{data.Home}</p>
        </>
    )
}