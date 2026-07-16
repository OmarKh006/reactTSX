import { useContext } from "react";
import { ThemeContext } from "./ContextVersion";

export default function ChangeThemeButtons() {
  const { onThemeChange } = useContext(ThemeContext);

  return (
    <div className="theme-controls">
      <button onClick={() => onThemeChange("light")}>Light</button>
      <button onClick={() => onThemeChange("dark")}>Dark</button>
    </div>
  );
}
