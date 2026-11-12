import { Button} from "react-bootstrap";
export default function ButtonComponent(){
    return(
        <>
        <div className="container mt-4 d-flex gap-2">
            <Button variant="primary">Button 1</Button>
            <Button variant="secondary">Button 2</Button>
            <Button variant="info">Button 3</Button>
        </div>
        </>
    )
}