import { Field, Formik,Form } from "formik";

export default function Login(){
    return(
        <>
        <Formik
        initialValues={{username:"",password:""}} 
        onSubmit={(value)=>console.log(value)}
        >           
        <div style={{ display:"flex", flexDirection:"column",width:"300px",justifyContent:"center",alignItems:"center",margin: "0 auto",}}>
            <Form>
                <div>
                    <label className="form-label" htmlFor="username">Enter User Name</label>
                    <Field className="form-control" type="text" id="username" name="username"/>
                </div>
            
                <div>
                    <label className="form-label" htmlFor="password">Enter password</label>
                    <Field className="form-control" type="password" id="password" name="password"/>
                </div>

                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </Form>

        </div>
        
        </Formik>
        </>
    )
}