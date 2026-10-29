export default function Editprofile({
    handleevent,
    setIp,
    ip

}){
    return(
        <form onSubmit={handleevent}>
              <div className="row">
                <label className="form-label">Name :</label>
                <input
                  className=" form-control"
                  type="text"
                  value={ip.name}
                  name="name"
                  onChange={(e) => {
                    setIp({
                      ...ip,
                      name: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="row">
                <label className="form-label">Age :</label>
                <input
                  className="form-control"
                  type="text"
                  value={ip.age}
                  name="age"
                  onChange={(e) => {
                    setIp({
                      ...ip,
                      age: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit"> Submit </button>
        </form>
    )
}