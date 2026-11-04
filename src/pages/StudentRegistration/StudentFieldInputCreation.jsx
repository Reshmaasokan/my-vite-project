import { Field } from "formik";
import StudentFieldSelect from "./StudentFieldSelect"
export default function StudentFieldInputCreation({
  field: {
    fieldlabelclassName,
    fieldlabeltext,
    fieldClassName,
    fieldType,
    fieldName,
    fieldPlaceholder,
    fieldOption
  },
}){
  return (
    <>
      <div>
        <label className={fieldlabelclassName}>{fieldlabeltext}</label>
        {fieldType != "select" ? (
          <div>
              <Field
                className={fieldClassName}
                type={(fieldType != "textarea") && fieldType}
                as={(fieldType === "textarea") && fieldType}
                name={fieldName}
                placeholder={fieldPlaceholder}
              />
          </div>
        ) : (
          <div>
            <StudentFieldSelect
                fieldClassName={fieldClassName}
                fieldType={fieldType}
                fieldName={fieldName}
                fieldPlaceholder={fieldPlaceholder}
                fieldOption={fieldOption}
            />
          </div>
        )}
      </div>
    </>
  );
}