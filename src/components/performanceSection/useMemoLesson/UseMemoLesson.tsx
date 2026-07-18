import { useState, useMemo } from "react";
import expensiveCalculation from "../expensiveCalculation";

export default function UseMemoLesson() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("🔄 Running expensive calculation...");
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div className="demo">
      <h1>useMemo Hook</h1>
      <section>
        <p>Count: {count}</p>
        <p>Expensive Calculation Result: {expensiveResult}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      </section>

      <section>
        <div className="note">Open console and type in the input - UI remains responsive</div>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
      </section>
    </div>
  );
}
