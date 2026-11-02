import { useState } from "react";
import users from "./user.json";

export function UserList() {

  const [userList, setUserList] = useState(users);

  const [editIndex, setEditIndex] = useState(null);

  const [editUser, setEditUser] = useState({});

  const [message, setMessage] = useState(null);


  // Edit button
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser({ ...userList[index] });
    setMessage(null);
  };


  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname") {
      setEditUser({
        ...editUser,
        name: {
          ...editUser.name,
          [name]: value
        }
      });
    }

    else if (name === "city" || name === "street") {
      setEditUser({
        ...editUser,
        address: {
          ...editUser.address,
          [name]: value
        }
      });
    }

    else {
      setEditUser({
        ...editUser,
        [name]: value
      });
    }
  };


  // Save updated user
  const handleSave = () => {

    const updatedUsers = userList.map((value, index) => {
      return index === editIndex ? editUser : value;
    });

    setUserList(updatedUsers);
    setEditIndex(null);
    setMessage("updated");
  };


  // Delete user
  const handleDelete = (userIndex) => {

    const deleteUser = userList.filter(
      (value, index) => index !== userIndex
    );

    setUserList(deleteUser);
    setMessage("deleted");

    if (editIndex === userIndex) {
      setEditIndex(null);
    }
  };


  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary fw-bold mb-4">
        User Details
      </h2>


      {/* Alert Messages */}

      {message === "updated" ? (
        <div className="alert alert-success">
          User Updated Successfully!
        </div>
      ) : message === "deleted" ? (
        <div className="alert alert-success">
          User Deleted Successfully!
        </div>
      ) : null}


      <table className="table table-bordered text-center border-dark shadow">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>City</th>
            <th>Street</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

          {userList.map((user, index) => {

            return (

              <tr key={user.id}>

                <td>{user.id}</td>


                {/* Full Name */}

                <td>
                  {editIndex === index ? (

                    <div>
                      <input
                        type="text"
                        name="firstname"
                        className="form-control mb-2"
                        value={editUser.name?.firstname || ""}
                        onChange={handleChange}
                      />

                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        value={editUser.name?.lastname || ""}
                        onChange={handleChange}
                      />
                    </div>

                  ) : (

                    <span className="text-capitalize fw-bold">
                      {user.name.firstname} {user.name.lastname}
                    </span>

                  )}
                </td>


                {/* Email */}

                <td>
                  {editIndex === index ? (

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={editUser.email || ""}
                      onChange={handleChange}
                    />

                  ) : user.email}
                </td>


                {/* Username */}

                <td>
                  {editIndex === index ? (

                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      value={editUser.username || ""}
                      onChange={handleChange}
                    />

                  ) : user.username}
                </td>


                {/* Phone */}

                <td>
                  {editIndex === index ? (

                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={editUser.phone || ""}
                      onChange={handleChange}
                    />

                  ) : user.phone}
                </td>


                {/* City */}

                <td>
                  {editIndex === index ? (

                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={editUser.address?.city || ""}
                      onChange={handleChange}
                    />

                  ) : (

                    <span className="text-capitalize">
                      {user.address.city}
                    </span>

                  )}
                </td>


                {/* Street */}

                <td>
                  {editIndex === index ? (

                    <input
                      type="text"
                      name="street"
                      className="form-control"
                      value={editUser.address?.street || ""}
                      onChange={handleChange}
                    />

                  ) : (

                    <span className="text-capitalize">
                      {user.address.street}
                    </span>

                  )}
                </td>


                {/* Action Buttons */}

                <td>

                  <div className="d-flex gap-2">

                    {editIndex === index ? (

                      <button
                        className="btn btn-success btn-sm"
                        onClick={handleSave}
                      >
                        Save
                      </button>

                    ) : (

                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                    )}


                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

    </div>
  );
}