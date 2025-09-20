import { useState } from "react";

export default function Counter() {
  //   const [count, setCount] = useState(0);

  const [history, setHistory] = useState([{ historyId: 1, count: 0 }]);
  const [incrementRate, setIncrementRate] = useState(1);

  let latestCount = history[0].count;

  const timesClicked = history.length - 1;

  //with derived state

  function handleIncrementRate(e) {
    setIncrementRate(Number(e.target.value));
  }

  function handleClick(operation) {
    if (operation === "increment" || operation === "decrement") {
      setHistory((prevHistory) => {
        const operand =
          operation === "increment" ? incrementRate : -incrementRate;
        const newCount = prevHistory[0].count + operand;

        const newHistory = [
          { historyId: prevHistory.length + 1, count: newCount },
          ...prevHistory,
        ];

        return newHistory;
      });
    } else if (operation === "reset") {
      setHistory([{ historyId: 1, count: 0 }]);
      setIncrementRate(1);
    }
  }

  //without derived state
  //   function handleClick(operation) {
  //     if (operation === `increment`) {
  //       setCount((prev) => {
  //         const newCount = prev + 1;

  //         setHistory((prevHistory) => {
  //           const newHistory = [
  //             { arrId: prevHistory.length, value: newCount },
  //             ...prevHistory,
  //           ];
  //           return newHistory;
  //         });

  //         return newCount;
  //       });
  //     }
  //     if (operation === `decrement`) {
  //       setCount((prev) => {
  //         const newCount = prev - 1;

  //         setHistory((prevHistory) => {
  //           const newHistory = [
  //             { arrId: prevHistory.length, value: newCount },
  //             ...prevHistory,
  //           ];
  //           return newHistory;
  //         });

  //         return newCount;
  //       });
  //     } else if (operation === "reset") {
  //       setCount(0);
  //       setHistory([]);
  //     }
  //   }

  return (
    <section className="counter">
      <h3 className="count-display">{latestCount}</h3>

      <div className="button-container">
        <button onClick={() => handleClick("increment")}>Increment</button>
        <button onClick={() => handleClick("reset")}>Reset</button>
        <button onClick={() => handleClick("decrement")}>Decrement</button>
      </div>

      <input
        type="number"
        onChange={handleIncrementRate}
        value={incrementRate}
        placeholder="Change inc/dec values"
      />

      <div className="history-container">
        <p>Times clicked : {timesClicked}</p>
        Count History:
        <ul>
          {history.map((item) => (
            <li key={item.historyId}>{item.count}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
