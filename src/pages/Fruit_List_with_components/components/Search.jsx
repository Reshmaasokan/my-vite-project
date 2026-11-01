import { useState } from "react";

export default function Search({
  fruit,
  setFilter,
  setMessage
}) {

  const [searchElement, setSearchElement] = useState("");

  const searchevent = (e) => {
    e.preventDefault();

    if (searchElement.trim() === "") {
      setFilter(null);
      setMessage("empty");
      return;
    }

    const check = fruit.filter((value) =>
      value.toLowerCase().includes(
        searchElement.trim().toLowerCase()
      )
    );

    if (check.length === 0) {
      setMessage("empty");
    } else {
      setMessage(null);
    }

    setFilter(check);
    setSearchElement("");
  };

  // Component JSX return
  return (
    <>
      <div className="container w-50">
        <form onSubmit={searchevent}>
          <label htmlFor="searching" className="form-label">
            Search fruit
          </label>

          <input
            type="text"
            className="form-control"
            id="searching"
            value={searchElement}
            onChange={(e) => {
              setSearchElement(e.target.value);
            }}
          />

          <button type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}