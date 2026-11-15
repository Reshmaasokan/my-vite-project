import { useState } from "react"

export default function UpdateCrackers({edit,setEdit,cracker,setCracker,selectedIndex}){

    const selectCracker=cracker[selectedIndex];

    const [editCracker,setEditCrackers]=useState(selectCracker.name)

    const [editCrackerPrice,setEditCrackerPrice]=useState(selectCracker.price)

     const handleedit=(e)=>{
        e.preventDefault()
        const UpdateCrackers=cracker.map((value,index)=>{
            if(index===selectedIndex){
                return{
                ...value,
                name:editCracker,
                price:editCrackerPrice
                }
            }
            else{
                return value
            }
        })

        setCracker(UpdateCrackers)
        setEdit(!edit)
     }
    return (
      <>
        <form onSubmit={handleedit}>
          <div className="d-flex">
            <div>
              <input
                type="text"
                value={editCracker}
                onChange={(e) => setEditCrackers(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                value={editCrackerPrice}
                onChange={(e) => setEditCrackerPrice(e.target.value)}
              />
            </div>

            <div>
              <button className="btn btn-success"type="submit">Save</button>
            </div>
          </div>
        </form>
      </>
    );
}