import UseUser from "./Hook/UseUser";

export default function User(){
    const user=UseUser()
    return (
      <>
        <div>User Details</div>
        <div>
          {user.map((value, index) => (
            <div key={index}>
              <span>{value.id}.</span>
              <span> {value.username}</span>
            </div>
          ))}
        </div>
      </>
    );
}