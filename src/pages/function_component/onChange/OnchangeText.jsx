import { useState } from "react"
import { postApicall } from "../../../../Service/Service"
export default function OnchangeText(){
 
    const[ip,setIp]=useState({})
    const [apiSuccess, setApiSuccess] = useState(false);


    const Enterdetails=(e)=>{

            const fieldName=  e.target.name
            const fieldValue =  e.target.value

          setIp({
            ...ip,
            [fieldName]:fieldValue})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
           const payload={
             id: 0, 
             username: ip["username"], 
             email: ip["email"], 
             password: ip["password"]
           }

           const response =await postApicall(payload)
           
           console.log("Response===>",response)
           setApiSuccess(true);

        }
        catch(error){
            console.error("Error:::",error)
            setApiSuccess(false);
        }
    }
    return(
        <>
        <div className="container m-3">
            <div className="h1 fw-bold text-primary text-center">
               Registration
            </div>
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Name:</label>
                    <input type="text"
                             name="username"
                             className="form-control"
                             placeholder="Enter your name"
                             onChange={Enterdetails}>
                    </input>
                </div>


                <div>
                    <label className="form-label"></label>
                    <input type="email"
                           name="email"
                           className="form-control"
                           placeholder="Enter your email"
                           onChange={Enterdetails}>
                    </input>
                </div>


                <div> 
                    <label className="form-label"></label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           placeholder="Enter your password"
                           onChange={Enterdetails}>
                    </input>
                </div>

                <div>
                    <button type="submit" 
                            className="btn btn-primary mt-3">Register
                    </button>

                </div>
            </form>
            { apiSuccess &&(
                <div 
                    className="alert alert-success mt-3"> API request completed successfully! 
                </div> 
            )}
        
        </div>
        </>
    )
}