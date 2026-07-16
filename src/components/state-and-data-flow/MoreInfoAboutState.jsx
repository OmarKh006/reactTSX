import { useState } from "react";

const Counter = ({ initValue }) => {
  const [counter, setCounter] = useState(() => initValue + 5);
  const [username, setUsername] = useState("Abu");
  const [firstName, setFirstName] = useState("Mohamed");
  const [lastName, setLastName] = useState("Abusrea");

  const increaseCounterHandler = () => setCounter(counter + 1);

  const decreaseCounterHandler = () => setCounter(counter - 1);

  return (
    <div className="controls">
      {/* <span>{username}</span>
      <span>{firstName}</span>
      <span>{lastName}</span> */}
      <button onClick={increaseCounterHandler}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseCounterHandler}>-</button>
    </div>
  );
};

export default function MoreInfoAboutState() {
  return (
    <div className="demo">
      <h1>Understanding State</h1>
      <section>
        <h2>State with Different Types</h2>
        <Counter initValue={0} />
        <Counter initValue={5} />
        <Counter initValue={10} />
      </section>
    </div>
  );
}
