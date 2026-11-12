import { Button, Card } from "react-bootstrap";
import students from "../Card.json"
export default function Cardcomponent(){
    return(
        <>
        <div className="m-3 row">
            {students.map((info)=>(
                <div className="col-md-4 mb-3" key={info.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center" style={{background:"lightblue"}}>Student Information</Card.Title>
                            <Card.Text className="ps-2">
                                <p>Name:{info.name}</p>
                                <p>Course:{info.Course}</p>
                                <p>College:{info.College}</p>
                                <p>Email:{info.Email}</p>
                            </Card.Text>
                            <Button variant="primary" className="ps-2">View more</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>

        </>
    )
}