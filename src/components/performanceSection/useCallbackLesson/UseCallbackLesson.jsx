import { useState, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

export default function UseCallbackLesson() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");

  const handleValueChange = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  return (
    <div className="demo">
      <h1>useCallback Hook</h1>
      <div className="note">ExpensiveComponent only re-renders when its props change</div>

      <ExpensiveComponent value={value} onChange={handleValueChange} />

      <div className="note">This input doesn't cause ExpensiveComponent to re-render</div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
    </div>
  );
}
