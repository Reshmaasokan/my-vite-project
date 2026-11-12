export default function DisplayCrackers( { cracker }){
    return (
      <>
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
              <tbody>{cracker.map((value,index)=>{
                  return(
                    <tr key={index}>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.price}</td>
                      <td>
                        {
                          <div className="d-flex gap-2">
                            <button className="btn btn-success">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                          </div>
                        }
                      </td>
                    </tr>
                  )
              })}
              </tbody>
          </table>
      </div>
      </>
    );
}