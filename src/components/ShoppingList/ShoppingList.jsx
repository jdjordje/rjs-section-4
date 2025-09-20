import ShoppingListItem from "./ShoppingListItem.jsx";
import { useState } from "react";

export default function ShoppingList() {
  const [list, setList] = useState(["test"]);
  const [input, setInput] = useState("");

  function addItem() {
    if (input.trim() === "") {
      return;
    }
    const updatedList = [input, ...list];
    setList(updatedList);
    setInput("");
  }

  return (
    <>
      <div className="shopping-list">
        <h3>Shopping List</h3>
        <div className="input-section">
          <input
            type="text"
            placeholder="Type in "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span onClick={addItem}>➕</span>
        </div>
        {list.map((item, index) => (
          <ShoppingListItem key={index} shoppingItem={item} />
        ))}
      </div>
    </>
  );
}
