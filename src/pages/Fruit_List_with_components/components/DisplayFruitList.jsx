export default function DisplayFruitList({
    fruit,
    setFruit,
    setMessage
}) {

  const handledelete=(fruitindex)=>{
      const deleteelmt=fruit.filter((value,index)=>index!=fruitindex)
      setFruit(
        deleteelmt
      )
      setMessage("delete")
  }
  return (
    <>
      <div className="container w-50">
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {fruit.map((value, index) => {
              return (
                <tr>
                  <td key={index}>{index + 1}</td>
                  <td>{value}</td>
                  <td>
                    {
                      <div className="d-flex gap-2">
                        <button className="bg-success">edit</button>
                        <button className="bg-danger" onClick={()=>handledelete(index)} >Delete</button>
                      </div>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
