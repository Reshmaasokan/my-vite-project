import { useState, useEffect } from "react";

export default function EditFruit({
  fruit,
  setFruit,
  editIndex,
  setEditIndex,
  setMessage
}) {

  const [editFruit, setEditFruit] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      setEditFruit(fruit[editIndex]);
    }
  }, [editIndex, fruit]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (editFruit.trim() === "") {
      return;
    }

    const updatedFruit = [...fruit];

    updatedFruit[editIndex] = editFruit.trim();

    setFruit(updatedFruit);
    setMessage("edit");
    setEditIndex(null);
  };

  return (
    <>
      {editIndex !== null && (
        <div className="container w-50 mt-3">
          <form onSubmit={handleUpdate}>
            <label className="form-label">
              Edit Fruit
            </label>

            <input
              type="text"
              className="form-control"
              value={editFruit}
              onChange={(e) => setEditFruit(e.target.value)}
            />

            <button type="submit" className="btn btn-success mt-2">
              Update
            </button>

            <button
              type="button"
              className="btn btn-secondary mt-2 ms-2"
              onClick={() => setEditIndex(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}