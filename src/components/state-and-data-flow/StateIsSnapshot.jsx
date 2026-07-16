import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleRegularClick = () => {
    setCounter(counter + 1); //0+1 = 1
    setCounter(counter + 1); //0+1 = 1
    setCounter(counter + 1); //0+1 = 1
  };

  const handleUpdaterClick = () => {
    setCounter((prevCounter) => prevCounter + 1); //0+1 = 1
    setCounter((prevCounter) => prevCounter + 1); //1+1 = 2
    setCounter((prevCounter) => prevCounter + 1); //2+1 = 3
  };

  const handleResetClick = () => setCounter(0);

  return (
    <div className="state-demo">
      <h2>Count: {counter}</h2>
      <div className="buttons">
        <button onClick={handleRegularClick}>Regular +3 = 1</button>
        <button onClick={handleUpdaterClick}>Updater +3 = 3</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default function StateIsSnapshot() {
  return (
    <div className="demo">
      <h1>State is not a variable</h1>
      <section>
        <Counter />
      </section>
    </div>
  );
}
