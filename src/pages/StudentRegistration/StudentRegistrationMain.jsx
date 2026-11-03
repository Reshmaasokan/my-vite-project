import { Formik } from "formik"
import {initialValues,handleSubmit} from "./StudentFormSetUp"
import StudentRegistrationForm from "./StudentRegistrationForm"
export default function StudentRegistrationMain(){
    return(
        <>
        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}>

        <StudentRegistrationForm/>
        </Formik>
    

        </>
    )
}