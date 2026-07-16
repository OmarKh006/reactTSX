import { useEffect, memo } from "react";
import expensiveCalculation from "../expensiveCalculation";
const ExpensiveComponent = function ExpensiveComponent({ value, onChange }) {
  return (
    <section>
      <p>Value: {expensiveCalculation(value)}</p>
      <button onClick={onChange}>Update Value</button>
    </section>
  );
};

export default memo(ExpensiveComponent);
