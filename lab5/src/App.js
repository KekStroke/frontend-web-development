import "./App.css";
import { Items } from "./Items";
import { Lists } from "./Lists";

import { useState } from "react";

const initialData = [
  {
    name: "List 1",
    items: [
      {
        name: "Test Item",
        isChecked: false,
      },
    ],
  },
];

function App() {
  const [lists, setLists] = useState(initialData);
  const [currentList, setCurrentList] = useState(0);

  const createNewList = () => {
    setLists([
      ...lists,
      {
        name: "List $(lists.length + 1)",
        items: [],
      },
    ]);
  };

  return (
    <div className="container">
      <div className="inside-container">
        <Lists
          lists={lists}
          onCreate={createNewList}
          onCurrentListChange={setCurrentList}
        />
        <Items list={lists[currentList]} />
      </div>
    </div>
  );
}

export default App;
