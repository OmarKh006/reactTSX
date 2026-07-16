import { useContext } from "react";
import { ThemeContext } from "./ContextVersion";

export default function ThemedButton({ children }) {
  const { theme } = useContext(ThemeContext);

  return <button className={`button-${theme}`}>{children}</button>;
}
