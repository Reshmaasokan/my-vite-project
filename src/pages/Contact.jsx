import { useContext } from "react"
import { MainContext } from "../Context/globalcontext"
import { Card } from "react-bootstrap"
export default function Contact(){
const contexts=useContext(MainContext)

console.log("Context===>",contexts)
    return(
        <>
           <div className="h1 text-center text-primary">Student Contact Page</div>
           <Card>
            <Card.Title className="text-center">Contact details</Card.Title>
            <Card.Body>
                <h5>
                    Contact person: {contexts.ContactPerson}
                </h5></Card.Body>
           </Card>

        </>
    )
}