import { useReducer } from "react";
import { reducerfn } from "./Bankdetails";
import { Card } from "react-bootstrap";
  const initialDetails = {
    Name: "",
    Age: 0,
    Balance: 0
};
export default function Bankdisplay() {

  const [name, dispatch] = useReducer(reducerfn, initialDetails);

  return (
    <>
      <div className="text-center text-primary h3">User Bank Details</div>
      <div className="container w-50 m-auto">
        <div>
            <Card>
              <Card.Title className="text-center">user Details</Card.Title>
              <Card.Body>
                <div>
                  <div>
                    <span>Name:</span>
                    <span>{name.Name}</span>
                  </div>
                  <div>
                    <span>Age:</span>
                    <span>{name.Age}</span>
                  </div>
                  <div>
                    <span>Balance:</span>
                    <span>{name.Balance}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
        </div>

        <button
          className="btn btn-primary mt-3"
          onClick={() => dispatch({ type: "display" })}
        >
          DisplayBalance
        </button>
      </div>
    </>
  );
}
