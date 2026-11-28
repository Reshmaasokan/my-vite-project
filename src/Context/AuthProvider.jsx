import { Authcontext } from "./AuthContext"
import { useState } from "react"
export default function AuthProvider({children}){
   

    const [loginstatus,setLoginStatus]=useState(false)




    return(
        <>
        <Authcontext.Provider value={{loginstatus,setLoginStatus}}>
            {children}
        </Authcontext.Provider>
        
        </>
    )
}