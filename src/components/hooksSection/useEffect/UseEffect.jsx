import Timer from "./Timer";
import WindowSize from "./WindowSize";

export default function UseEffect() {
  return (
    <div className="demo">
      <h1>Understanding useEffect</h1>

      <section>
        <h2>Effect with Cleanup (Timer)</h2>
        <Timer />
      </section>

      <section>
        <h2>Effect with Window Events</h2>
        <WindowSize />
      </section>
    </div>
  );
}
