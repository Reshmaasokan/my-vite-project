import { useState } from "react"
import { CardBody, CardTitle,Card} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {fetchCall} from "../service/endPointCall"
export default function Login(){

    const [loginuser,setLoginUser]=useState({})
    const navigaet=useNavigate()

    const handleEvent=(e)=>{
        const fieldName=e.target.name
        const fieldValue=e.target.value
        setLoginUser({
            ...loginuser,
            [fieldName]:fieldValue
        })
    }


    const handleSubmit= async(e)=>{
        e.preventDefault()
        if(loginuser!={}){
            const payload={
                "username":loginuser.user,
                "password":loginuser.password
            }
            const response= await fetchCall("auth/login","post",payload)
            if(response && response.token){
                localStorage.setItem('token',response.token)
                navigaet('/dashboard')
            }
        }
    }
    
    return(
        <>
            <Card className="w-75 m-auto">
                <CardTitle className="text-center fw-bold">Login Form</CardTitle>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="user" className="form-label">Username:</label>
                            <input type="text" className="form-control" name="user" id="user" onChange={handleEvent} />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" name="password" id="password" onChange={handleEvent} />
                        </div>
                        <button className="btn btn-primary mt-3" type="submit">Submit</button>
                    </form>
                </CardBody>
            </Card>

        </>
    )
}