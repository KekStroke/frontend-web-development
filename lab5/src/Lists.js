import "./List.css";

export const Lists = (props) => {
  return (
    <div className="list-container">
      <h2>Lists</h2>
      <button onClick={props.onCreate}>Create</button>
      <ul>
        {props.lists.map((list) => (
          <li onClick={() => props.onCurrentListChange(index)}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};
