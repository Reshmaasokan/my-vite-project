export default function DisplayList(
    {
            fruits,
            display,
            setDisplay

    }
){
    return (
      <>
        <div className="container">
          <ul>
            {fruits.map((values, index) => {
              return <p key={index}>{values}</p>;
            })}
          </ul>

          <button
            className="btn-primary"
            onClick={() => {
              setDisplay(!display);
            }}
          >Edit</button>
        </div>
      </>
    );
}