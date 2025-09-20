import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseTracker() {
  const [expense, setExpense] = useState([]);

  const totalExpense = expense.reduce((acc, curr) => acc + curr.ammount, 0);

  function handleSubmit(event) {
    event.preventDefault();

    setExpense((prevExpense) => {
      const newExpenseArray = [
        ...prevExpense,
        {
          expense: event.target.expense.value,
          ammount: Number(event.target.ammount.value),
        },
      ];
      event.target.expense.value = "";
      event.target.ammount.value = "";

      return newExpenseArray;
    });
  }

  function handleDelete(itemIndex) {
    const deletedItemArray = expense.filter((_, index) => itemIndex !== index);

    setExpense(deletedItemArray);
  }

  return (
    <section className="expense-tracker">
      <h4 id="expense-header">
        <span>Expense tracker</span>
        <span style={{ display: totalExpense === 0 ? `none` : `inline ` }}>
          {totalExpense}
        </span>
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="expense"
          placeholder="Type expense..."
          required
        />
        <input
          type="number"
          id="ammount"
          placeholder="Type ammount..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="items-cont">
        {expense.map((item, index) => (
          <ExpenseItem
            {...item}
            key={index}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </section>
  );
}
