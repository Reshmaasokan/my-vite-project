import {Field,Form} from "formik"
import studentdata from "../../assets/RegisterForm.json"
export default function BasicForm(){
    return(
        <>
        <div>
            <Form>
                {studentdata.map((value,index)=>{
                    return(
                        <div key={index}>
                            <label>{value.fieldLabel}</label>
                            <Field
                               type={value.fieldtype}
                               name={value.fieldName}
                               className={value.fieldClassName}
                            />
                        </div>
                    )
                })}

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </Form>
        </div>

        </>
    )
}