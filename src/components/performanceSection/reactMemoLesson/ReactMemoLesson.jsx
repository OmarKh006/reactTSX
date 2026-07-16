import { useState } from "react";
import ExpensiveList from "./ExpensiveList";

export default function ReactMemoLesson() {
  const [items] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);
  const [count, setCount] = useState(0);

  return (
    <div className="demo">
      <h1>React.memo</h1>

      <div className="panel-dark">
        <p>Counter: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment (Won't Re-render List)</button>
      </div>

      <div className="note">Open console - List only renders once despite counter updates</div>

      <ExpensiveList items={items} />
    </div>
  );
}
