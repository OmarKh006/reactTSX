import { useRef, useState } from "react";
import TextInput from "./TextInput";
import ScrollableBox from "./ScrollableBox";

export default function UseRef() {
  return (
    <div className="demo">
      <h1>Understanding useRef</h1>

      <section>
        <h2>DOM Access (Focus)</h2>
        <TextInput />
      </section>

      <section>
        <h2>DOM Access (Scroll)</h2>
        <ScrollableBox />
      </section>
    </div>
  );
}
