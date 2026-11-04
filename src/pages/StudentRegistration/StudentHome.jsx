import {useState} from "react"
import StudentRegistrationMain from "./StudentRegistrationMain"
export default function StudentHome(){
    const [display,setDisplay]=useState(false)
    return (
      <>
        <div className="container m-3">
          <div className="h2 text-center text-primary"> Student Management System </div>
          <button className="btn btn-primary" onClick={() => {setDisplay(!display)}}>
                Register Student
          </button>
          <div className="container">
                <StudentRegistrationMain
                    display={display}
                />
          </div>
        </div>
      </>
    )
}