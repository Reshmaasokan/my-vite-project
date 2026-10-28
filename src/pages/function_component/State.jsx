import { useState } from "react"
export default function State(){
    const [name,setName]=useState("Keerthi")
    const [age,setAge]=useState(22)
    const [firstnumber,setFirstnumber]=useState(2)
    const [secondnumber,setSecondnumber]=useState(3)
    return(
        <>
        <div>
            <h1>Getting details</h1>
            <p><span><b>Name :</b>{name}</span></p>
            <p><span><b>Age :</b>{age}</span></p>
            <p>{name} is Studying in Bangalore. Her age is {age}</p>
            <h1>Multiplying Numbers</h1>
            <p><b>Result :</b>{firstnumber*secondnumber}</p>

        </div>
        </>
    )
}