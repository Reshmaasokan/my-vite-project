export default function Showprofile({
    ip,
    handleEdit
}){
    return(
        <div className="container">
              <div>
                <span className="h5">Name:</span>
                <span>{ip.name}</span>
              </div>

              <div>
                <span className="h5">Age :</span>
                <span>{ip.age}</span>
              </div>

              <div className="container mt-3">
                <span className="btn btn-primary" onClick={handleEdit}>
                  edit
                </span>
              </div>
        </div>
    )
}