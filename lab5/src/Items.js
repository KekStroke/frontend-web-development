import "./Items.css";

import { Item } from "./Item";

export const Items = () => {
  return (
    <div className="items-container">
      <h2>List Title</h2>
      <div className="new-item">
        <input type="text" placeholder="Item Name" />
        <button>Create</button>
      </div>
      <div className="items-list">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
