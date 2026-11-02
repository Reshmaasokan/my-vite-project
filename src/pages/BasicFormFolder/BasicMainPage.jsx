import { Formik } from "formik"
import BasicForm from "./BasicForm"
export default function BasicMainPage(){
    return (
      <>
        <div>
          <Formik
            initialValues={{
              CandidateName: "",
              CandidateAge: "",
              CandidateEmail: "",
              CandidatePassword: "",
            }}

            onSubmit={(value)=> console.log("form is submitted====>",value)}
          >

            <BasicForm/>
            
          </Formik>
        </div>
      </>
    );
} 