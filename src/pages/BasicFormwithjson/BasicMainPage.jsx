import {Formik} from "formik"
import BasicForm from "./BasicForm"
export default function BasicMainPage(){
    return(
        <>
        <Formik 
        initialValues={{
            CandidateName:"",
            CandidateAge:"",
            CandidateEmail:"",
            CandidatePassword:""
        }}
        onSubmit={(value)=>console.log("form is submited====>",value)}>
        

        <BasicForm/>

        </Formik>

        

        </>
    )
}