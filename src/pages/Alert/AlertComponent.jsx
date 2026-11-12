import { Alert } from "react-bootstrap"
import color from "./Alert.json"
export default function AlertComponent(){
    return (
      <>
        {color.map((colr) => (
          <div key={colr.color}>
            <Alert variant={colr.color}>This is a {colr.color} alert-check it out! </Alert>
          </div>
        ))}
      </>
    );
}