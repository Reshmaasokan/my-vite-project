import { useState } from "react";
export default function AddCrackers({ setCracker,cracker,showadd,setShowAdd}) {
  const [addCrackers, setAddCrackers] = useState("");

  const [addCrackersPrice, setAddCrackersPrice] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const newCracker = {
      id:cracker.length+1,
      name:addCrackers,
      price:addCrackersPrice
    };

    setCracker([...cracker,newCracker])
    setAddCrackers("")
    setAddCrackersPrice("")
    setShowAdd(!showadd)
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="mt-2">
            <label htmlFor="add" className="form-label">
              Type Crackers
            </label>
            <input
              type="text"
              className="form-control"
              value={addCrackers}
              id="add"
              onChange={(e) => {
                setAddCrackers(e.target.value);
              }}
            />
          </div>
          <div className="mt-2">
              <label htmlFor="addprice" className="form-label">
                Type Crackers Price
              </label>
              <input type="text" className="form-control" value={addCrackersPrice} id="addprice" onChange={(e) => {
                setAddCrackersPrice(e.target.value);
                }}
              />
          </div>
          <button type="submit">Add</button>
        </form> 
      </div>
    </>
  );
}
