import { useContext } from "react";
import { ThemeContext } from "./ContextVersion";

export default function ThemedPanel({ title, children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`panel-${theme}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
