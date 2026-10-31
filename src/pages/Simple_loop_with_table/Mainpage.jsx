
import { useState } from "react"

export default function MainPage(){

    const [fruit,setFruit]=useState(["apple","mango","orange","pineapple"])
    const [newfruit,setNewfruit]=useState("")

    const handlechange=(e)=>{
           setNewfruit(e.target.value)
    }

    const handleadd=(e)=>{
        e.preventDefault()
        if(newfruit.trim()==""){
            return;
        }
        setFruit([
            ...fruit,
            newfruit
        ])

        setNewfruit("")
    }

    const handledelete=(fruitIndex)=>{
       const deleteelemnt=fruit.filter((value,index)=>index!=fruitIndex)
       setFruit(
        deleteelemnt
       )
    }

    return (
      <>
      <div className="container">

      <table className="table w-50">
          <thead>
            <th>S.no</th>
            <th>Name</th>
            <th>Action</th>
          </thead>

          
        <tbody>
          { fruit && fruit.length!=0? (
            fruit.map((value, index) => {
                return (
                
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value}</td>
                      <td>{<button onClick={()=>handledelete(index)}>delete</button>}</td>
                    </tr>
                )
              }))
            :
            (
             <tr><td colSpan={3}>No fruits found</td></tr>
            )
        }
        </tbody>

      </table>

      </div>
 
       <div className="container">

        <form onSubmit={handleadd}>
            <label className="form-label">Type fruit</label>
            <input type="text" className="form-control" value={newfruit} onChange={handlechange}/>
            <button type="submit" className="mt-3">Add</button>
        </form>

       </div>


      </>
    )
}