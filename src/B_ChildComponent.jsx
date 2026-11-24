import { memo } from "react"
export default memo(function ChildComponent({}){
    console.log("Child rendering")
    return (
      <>
        <h3>
          A Calculator is an application used to perform mathematical
          calculations. It supports operations like addition, subtraction,
          multiplication, and division. It helps users calculate numbers quickly
          and accurately.
        </h3>
      </>
    );
})