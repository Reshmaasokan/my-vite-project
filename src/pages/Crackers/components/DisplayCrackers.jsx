import { useState } from "react";

import UpdateCrackers from "./UpdateCrackers";

export default function DisplayCrackers( { cracker,setCracker }){

  
    const handleDelete=(crackindex)=>{
      const deleteditem=cracker.filter((value,index)=>index!=crackindex)
      setCracker(deleteditem)
    }

    const [selectedIndex,setSelectedIndex]=useState(null)

    const handleEdit =(crackerindex)=>{
      setEdit(!edit)
      setSelectedIndex(crackerindex)
    }
    const [edit,setEdit]=useState(true)

    return (
      <>
        {edit ? (
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Sl.no</th>
                  <th>Name</th>
                  <th>Prices</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cracker.map((value, index) => {
                  return (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.price}</td>
                      <td>
                        {
                          <div className="d-flex gap-2">
                            <button className="btn btn-success"
                            onClick={()=>handleEdit(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </div>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <UpdateCrackers edit={edit} setEdit={setEdit} cracker={cracker} setCracker={setCracker} selectedIndex={selectedIndex} />
        )}
      </>
    );
}