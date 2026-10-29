export default function AddList({
    handleAdd
}){
    return(
        <>
        <div className="container">
            <div className="h4 text-center text-primary">Add the fruit</div>
            <form className="w-50">
                <label htmlFor="form-label">Add fruits</label>
                <input className="form-control" onChange={handleAdd}></input>
                <button className="mt-3"type="submit">Add</button>
            </form>
        </div>

        </>
    )
}