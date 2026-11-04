import {Field} from "formik"
export default function StudentFieldSelect({
    fieldClassName,
    fieldType,
    fieldName,
    fieldPlaceholder,
    fieldOption
}){
    return(
        <>
        <div>
            <Field
            className={fieldClassName}
            as={fieldType}
            name={fieldName}
            >
            {fieldOption.map(
                (value,key)=>{
                    return(
                    <option key={key} value={value}>{value}</option>
                )
            })}

            </Field>
        </div>

        </>
    )
}