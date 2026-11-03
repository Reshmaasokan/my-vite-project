import { Field } from "formik";

export default function StudentFieldInputCreation({
  field: {
    fieldlabelclassName,
    fieldlabeltext,
    fieldClassName,
    fieldType,
    fieldName,
    fieldPlaceholder
  },
}){
  return (
  <>
  <div>
    <label className={fieldlabelclassName}>{fieldlabeltext}</label>
    <Field
     className={fieldClassName}
     type={fieldType}
     name={fieldName}
     placeholder={fieldPlaceholder}
    />
    </div>
  </>
  )
}