import { useState } from "react"
import { Alert } from "react-bootstrap"
import AlertComponent from "./AlertComponent"

export default function AlertDismissal(){
    const [showSuccess,setShowSuccess]=useState(true)
    const [showWarning,setShowWarning]=useState(true)
    const [showDanger,setShowDanger]=useState(true)
    return (
      <>
        <div>
          {showSuccess && (
            <Alert variant="success" dismissible onClose={() => setShowSuccess(!showSuccess)}>
                Student Registered successfully
            </Alert>
          )}
        </div>

        <div>
            {showWarning && (
                <Alert variant="warning" dismissible onClose={()=> setShowWarning(!showWarning)}>
                    Please enter your details.
                </Alert>
            )}
        </div>

        <div>
            {showDanger &&(
                <Alert variant="danger" dismissible onClose={()=>setShowDanger(!showDanger)}>
                    Unable to save student
                </Alert>
            )}
        </div>

      </>
    );
}