export default function ButtonWithProps({ theme, children }) {
  return <button className={`button-${theme}`}>{children}</button>;
}
