export default function AddList({
    handleAdd,
    fruits,
    setFruits
}){
    return(
        <>
        <div className="container">
            <div className="h4 text-center text-primary">Add the fruit</div>
            <form className="w-50">
                <label htmlFor="form-label">Add fruits</label>
                <input className="form-control" onChange={(e)=>{handleAdd()}}></input>
                <button className="mt-3"type="submit">Add</button>
            </form>
        </div>

        </>
    )
}