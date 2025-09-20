import { useState } from "react";

export default function ShoppingListItem({ shoppingItem }) {
  const [isComplete, setIsComplete] = useState(false);

  function handleComplete() {
    setIsComplete((prev) => !prev);
    console.log(`check`);
  }

  return (
    <div
      className="shoppingItem"
      style={{ textDecoration: isComplete ? "line-through" : "none" }}
    >
      <div>{shoppingItem}</div> <span onClick={handleComplete}>✅</span>
    </div>
  );
}
