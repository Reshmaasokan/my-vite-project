import { useState } from "react"
import Editprofile from './componentsforprofileinfo/Editprofile'
import Showprofile from './componentsforprofileinfo/Showprofile'
export default function C_profileinfo(){
    const [ip,setIp]=useState(
        {
            name:"Reshma",
            age:22
        }
    )

    const [edit,setedit]=useState(false)

   const handleEdit=()=>{
    setedit(!edit)
   }

    

    const handleevent=(e)=>{
        e.preventDefault()
        setedit(!edit)
    }
    return (
      <>
        <div className="h1 text-center">Personal Details</div>
        <div className="container">
          <div>
          {!edit ? 
            (<Showprofile
              ip={ip}
              handleEdit={handleEdit}
            />) 
            : 
            (<Editprofile
               ip={ip}
               setIp={setIp}
               handleevent={handleevent}
            />)
          }
        </div>

        </div>
        
      </>
    );
}