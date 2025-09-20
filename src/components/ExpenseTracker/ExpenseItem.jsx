export default function ExpenseItem({ expense, ammount, onDelete }) {
  return (
    <div className="expense-item-container">
      <div className="expense-item">
        <span>{expense}</span>
        <span>{ammount}</span>
      </div>
      <button className="deleteBtn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
