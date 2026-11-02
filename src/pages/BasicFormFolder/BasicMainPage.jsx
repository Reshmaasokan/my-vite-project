import { Formik } from "formik"
import BasicForm from "./BasicForm"
export default function BasicMainPage(){
    return (
      <>

      <div className="container">
        <div className="h3 text-center text-primary">Basic Form</div>

        <div>
          <Formik
            initialValues={{
              CandidateName: "",
              CandidateAge: "",
              CandidateEmail: "",
              CandidatePassword: "",
            }}

            onSubmit={(value)=> console.log("form is submitted=====>",value)}
          >
            <BasicForm/>
            
          </Formik>
        </div>

      </div>

      </>
    );
} 