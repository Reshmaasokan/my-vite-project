import { useState } from "react"
import CrackersMainPage from "../CrackersMainPage"
export default function AddCrackers({setCracker}){
    const [addCrackers,setAddCrackers]=useState("")

    const [addCrackersPrice,setAddCrackersPrice]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()
        setCracker(addCrackers)
    }

    const handelpricesubmit=(e)=>{
        e.preventDefault()
        setCracker(addCrackersPrice)
    }
    return (
      <>
        <div className="container">
            <div className="mt-2">
                    <label htmlFor="add" className="form-label">Type Crackers</label>
                    <input type="text" className="form-control" value={addCrackers} id="add" onChange={(e) => {
                        setAddCrackers(e.target.value);
                    }}
                    />
                    <button type="submit" className="btn btn-primary mt-3" onSubmit={handlesubmit}>
                        Submit
                    </button>
            </div>
            <div className="mt-2">
                    <label htmlFor="addprice" className="form-label">Type Crackers Price</label>
                    <input type="text" className="form-control" value={addCrackersPrice} id="addprice" onChange={(e) => {
                        setAddCrackersPrice(e.target.value);
                    }}
                    />
                    <button type="submit" className="btn btn-primary mt-3" onSubmit={handelpricesubmit} >
                        Submit
                    </button>
            </div>
        </div>
      </>
    );
}