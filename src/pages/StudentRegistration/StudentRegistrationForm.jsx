import { Field, Form } from "formik";
import studentDetails from "./student.json"
import StudentFieldInputCreation from "./StudentFieldInputCreation"

export default function StudentRegistrationForm(){
    return (
      <>
      <div className="container">
         <Form>
            {studentDetails.map((value,key)=>{
                return (
                  <div key={key}>
                    <StudentFieldInputCreation 
                        field={value} />
                  </div>
                );
            })}
         </Form>
      </div>
      </>
    );
}