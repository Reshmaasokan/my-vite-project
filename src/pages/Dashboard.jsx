import {useNavigate} from "react-router-dom"
export default function Dashboard(){
    const navigate=useNavigate()
    const handleevent=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        <>
            <div className="h1 text-center text-primary">Welcome to Dashboard Page</div>
            <button className="btn btn-primary" onClick={handleevent}>Logout</button>

        </>
    )
}