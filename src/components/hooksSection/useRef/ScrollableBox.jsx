import { useState, useRef } from "react";

export default function ScrollableBox() {
  const [position, setPosition] = useState("top");
  const boxRef = useRef(null);

  const handleScroll = () => {
    const box = boxRef.current;
    const isAtBottom = box.scrollHeight - box.scrollTop === box.clientHeight;

    setPosition(isAtBottom ? "bottom" : "middle");
  };

  const scrollToBottom = () => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
    setPosition("bottom");
  };

  return (
    <div className="scroll-demo">
      <div ref={boxRef} className="scroll-box" onScroll={handleScroll}>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <p key={i}>Item {i + 1}</p>
          ))}
      </div>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
      <p className="message">Position: {position}</p>
    </div>
  );
}
