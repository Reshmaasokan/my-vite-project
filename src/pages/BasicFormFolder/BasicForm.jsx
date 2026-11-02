import { Form, Field } from "formik";

export default function BasicForm() {
  return (
    <>
      <div className="container">
        <Form>
          <div className="row">
            <label htmlFor="" className="form-label">Candidate Name</label>
            <Field className="form-control" type="text" name="CandidateName" />
          </div>
          <div className="row">
            <label htmlFor="" className="form-label">Candidate Age</label>
            <Field className="form-control" type="text" name="CandidateAge" />
          </div>
          <div className="row">
            <label htmlFor="" className="form-label">Candidate Email</label>
            <Field className="form-control" type="email" name="CandidateEmail"/>
          </div>
          <div className="row">
            <label htmlFor="" className="form-label">Candidate Password</label>
            <Field className="form-control" type="password" name="CandidatePassword"/>
          </div>

          <div class="mt-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </div>
    </>
  );
}
