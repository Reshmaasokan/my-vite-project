import { Formik, Field, Form } from "formik";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {fetchApicall} from "../../Service/service.api.call"
export default function Login() {
  const navi=useNavigate()

  return (
    <div className="p-5">
      <Card className="w-50 m-auto">
        <Card.Title className="text-center fw-bold">Login</Card.Title>
        <Card.Body>
          <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async(value) =>{
                const payload={
                  username:value.username,
                  password:value.password
                }
                
                const response=await fetchApicall("auth/login","post",payload)
                if(response&&response.token){
                  localStorage.setItem("token",response.token)
                  navi("/dashboard")
                }
            } }
          >
            <Form>
              <div>
                <label htmlFor="username" className="form-label">Enter username</label>
                <Field type="text" id="username" name="username" className="form-control"/>
              </div>

              <div>
                <label htmlFor="password" className="form-label">Enter password</label>
                <Field type="password" id="password" name="password" className="form-control"/>
              </div>

              <div className="mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}
