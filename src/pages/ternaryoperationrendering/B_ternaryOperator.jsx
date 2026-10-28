import { useState } from "react"

export default function B_ternaryOperator(){
    const [login,setLogin]=useState(false)
    const display=()=>{
         setLogin(!login)
    }
    return(
        <>
        <div className="container d-flex justify-content-center mt-5">
            <div className="card" style={{
                                    width:"300px",
                                    height:"200px"
                                    }}>
                <div className="card-title text-center fw-bold">
                    Login status
                </div>

                <div className="card-image">
                    {login?
                    (
                        <img src={profile} alt="profile" width={100} height={100}/>
                    )
                    :
                    ("")}
                </div>

                <div className="card-body text-center">
                    {login?"Welcome Back ,User!":"Please login to Continue"}
                </div>

                <div className="text-center">
                    <div className="btn btn-primary mb-3" 
                         style={{width:"250px"}}
                         onClick={display}>
                         {login?"Logout":"Login"}
                    </div>
                </div>
            
            </div>

        </div>
        
        </>
    )
}