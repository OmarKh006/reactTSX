import ButtonWithProps from "./ButtonWithProps";
import PanelWithProps from "./PanelWithProps";

export default function PropsVersion({ theme, onThemeChange }) {
  return (
    <section>
      <h2>Props Drilling Version</h2>
      <PanelWithProps theme={theme} title="Theme Demo">
        <p>Current theme: {theme}</p>
        <ButtonWithProps theme={theme}>Click me!</ButtonWithProps>
      </PanelWithProps>

      <div className="theme-controls">
        <button onClick={() => onThemeChange("light")}>Light</button>
        <button onClick={() => onThemeChange("dark")}>Dark</button>
      </div>
    </section>
  );
}
