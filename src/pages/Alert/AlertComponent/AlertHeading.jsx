import { useState } from "react"
import { Alert } from "react-bootstrap"

export default function AlertHeading(){
    const [show,setShow]=useState(true)

    return (
      <>
        {show && (
          <Alert variant="success" dismissible onClick={() => setShow(false)}>
            <Alert.Heading>
                Registration Successful!
            </Alert.Heading>

            <p>Your student information has been submitted successfully.</p>
          </Alert>
        )}
      </>
    )
}