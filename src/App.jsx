import Counter from "./components/counter.jsx";
import TaskRating from "./components/TaskRating/TaskRating.jsx";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker.jsx";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Interactive Dashboard</h1>
      <section className="top-section">
        <Counter />
        <TaskRating />
      </section>
      <section className="middle-section">
        <ExpenseTracker />
        <ShoppingList />
      </section>
    </>
  );
}

export default App;
