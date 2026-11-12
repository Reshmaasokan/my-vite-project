import { ListGroup } from "react-bootstrap";
import courseinfro from "./Listgroup.json";
export default function ListGroupComponent() {
  return (
    <ListGroup>
      {courseinfro.map((info) => (
        <ListGroup.Item key={info.id}>
          <div className="d-flex justify-content-between">
            <span>{info.course}</span>
            <span className="ms-5">{info.duration}</span>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
