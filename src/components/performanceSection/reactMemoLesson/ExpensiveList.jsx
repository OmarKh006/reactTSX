import { memo } from "react";

const ExpensiveList = function ExpensiveList({ items }) {
  console.log("ExpensiveList rendered");
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default memo(ExpensiveList);
