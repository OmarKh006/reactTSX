export default function PanelWithProps({ theme, title, children }) {
  return (
    <div className={`panel-${theme}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
