import { useState, useEffect, useContext, useRef } from "react";
import Counter from "./Counter";

export default function State() {
  return (
    <div className="demo">
      <h1>Understanding State</h1>
      <section>
        <h2>State with Different Types</h2>
        <Counter />
      </section>
    </div>
  );
}
