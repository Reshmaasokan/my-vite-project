import { useNavigate } from "react-router-dom"

export default function Dashboard(){
const navi=useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem("token")
        navi("/home")
    }
    return(
        <>
        <h1 className="text-center">Welcome to my dashboard Page</h1>
        <button onClick={handlelogout}>Logout</button>
        </>
    )
}