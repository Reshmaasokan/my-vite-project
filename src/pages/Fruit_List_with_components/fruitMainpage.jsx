import { useState } from "react"

export default function FruitMainpage(){

    const [fruit,setFruit]=useState(["apple","orange","grapes","kiwi"])

    return(
        <>
          <div className="container">

            <table className="table">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>
                    {fruit.map((value, index)=>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{value}</td>
                                <td>{<button>edit</button>}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
          </div>

        </>
    )
}
