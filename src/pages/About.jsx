import { useContext } from "react"
import { MainContext } from "../Context/globalcontext"
export default function About(){
    const abtcontexts=useContext(MainContext)
    console.log("Context:::>",abtcontexts)
    return(
        <>
           <div className="h1 text-center text-primary">About Page</div>
           <p className="text-center">{abtcontexts.Message}</p>
        </>
    )
}