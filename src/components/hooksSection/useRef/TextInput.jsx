import { useState, useRef } from "react";

export default function TextInput() {
  const [message, setMessage] = useState();
  const inputRef = useRef(null);

  const handleFocus = () => {
    setMessage("Input focused!");
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setMessage("Input blurred!");
  };

  return (
    <div className="input-demo">
      <input ref={inputRef} onBlur={handleBlur} onFocus={handleFocus} placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
      <p className="message">{message}</p>
    </div>
  );
}
