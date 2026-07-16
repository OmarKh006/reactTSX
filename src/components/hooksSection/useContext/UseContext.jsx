import { useState } from "react";
import PropsVersion from "./propsVersion";
import ContextVersion from "./contextVersion";

export default function UseContext() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="demo">
      <h1>Understanding Context</h1>
      <PropsVersion theme={theme} onThemeChange={setTheme} />
      <ContextVersion theme={theme} onThemeChange={setTheme} />
    </div>
  );
}
