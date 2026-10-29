export default function AddList({
    handleAdd,
    setFruits,
    fruits
}){
    return(
        <>
        <div className="container">
            <div className="h4 text-center text-primary">Add the fruit</div>
            <form className="w-50" onSubmit={handleAdd}>
                <label htmlFor="form-label">Add fruits</label>
                <input className="form-control" 
                       name="fruits"
                       onChange={(e)=>{
                        setFruits({
                             ...fruits,
                             fruits:e.target.value
                        })
                       }}
                ></input>
                <button className="mt-3"type="submit">Add</button>
            </form>
        </div>

        </>
    )
}