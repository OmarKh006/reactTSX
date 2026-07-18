import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("from use effect");
  }, []);

  return (
    <div className="controls">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
