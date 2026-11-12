import { Table } from "react-bootstrap";

export default function TableComponent() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Reshma</td>
                    <td>Java</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Kavitha</td>
                    <td>React</td>
                </tr>
            </tbody>
        </Table>
    );
}