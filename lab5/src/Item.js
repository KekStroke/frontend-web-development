import "./Item.css";

import { useState } from "react";

export const Item = (props) => {
  const [newItemName, setNewName] = useState();

  return (
    <div className="item-container">
      <input type="checkbox" />
      <label>Item</label>
      <button>Delete</button>
      <div className="items-list">
        {props.list.items.map((item) => {
          <Item />;
        })}
      </div>
    </div>
  );
};
