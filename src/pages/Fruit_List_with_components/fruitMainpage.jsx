import { useState } from "react"

export default function fruitMainpage(){

    const [fruit,setFruit]=useState(["apple","orange","grapes","kiwi"])

    return(
        <>
          <div className="container">
            <table className="table">
                <thead>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    {fruit.map((value,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{value}</td>

                                <td>
                                    {<button>edit</button>}
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
          </div>

        </>
    )
}
