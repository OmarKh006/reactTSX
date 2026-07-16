import { createContext } from "react";
import ChangeThemeButtons from "./ChangeThemeButtons";
import ThemedButton from "./ThemedButton";
import ThemedPanel from "./ThemedPanel";

export const ThemeContext = createContext(null);

export default function ContextVersion({ theme, onThemeChange }) {
  return (
    <ThemeContext.Provider value={{ theme, onThemeChange }}>
      <section>
        <h2>Context Version</h2>
        <ThemedPanel title="Theme Demo">
          <p>Current theme: {theme}</p>
          <ThemedButton>Click me!</ThemedButton>
        </ThemedPanel>

        <ChangeThemeButtons />
      </section>
    </ThemeContext.Provider>
  );
}
