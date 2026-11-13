import { Alert } from "react-bootstrap"
export default function AlertComponent(){
    return (
      <>
       <Alert variant="success">Student registered successfully!</Alert>
       <Alert variant="danger">Failed to register student!</Alert>
        <Alert variant="warning">Please enter your name!</Alert>
       <Alert variant="info">Welcome to Student Management System!</Alert>

      </>
    );
}