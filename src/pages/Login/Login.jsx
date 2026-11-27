import { Formik, Field, Form } from "formik";
import { Card,Button } from "react-bootstrap";
export default function Login() {
  return (
    <div className="p-5">
      <Card className="w-50 m-auto">
        <Card.Title className="text-center fw-bold">Login</Card.Title>
        <Card.Body>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(value) => console.log(value)}
          >
            <Form>
              <div>
                <label htmlFor="username" className="form-label">
                  Enter username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                />
              </div>

              <div>
                <label htmlFor="password" className="form-label">
                  Enter password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="mt-3">
                <Button variant="primary">Submit</Button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}
