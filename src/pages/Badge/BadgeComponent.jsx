import { Badge } from "react-bootstrap";
import info from "./student.json";
export default function BadgeComponent() {
  return (
    <>
      <div className="m-4 text-center">
        <table className="table w-50 ">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {info.map((details) => (
              <tr key={details.id}>
                <td>{details.name}</td>
                <td>
                  <Badge bg={details.color}>{details.number}/5</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
