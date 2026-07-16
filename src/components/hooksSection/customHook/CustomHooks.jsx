import NoteEditor from "./NoteEditor";
import OnlineStatus from "./OnlineStatus";

export default function CustomHooks() {
  return (
    <div className="demo">
      <h1>Custom Hooks</h1>

      <section>
        <h2>useOnlineStatus Hook</h2>
        <OnlineStatus />
      </section>

      <section>
        <h2>useLocalStorage Hook</h2>
        <NoteEditor id="user-note" />
        <NoteEditor id="student-note" />
      </section>
    </div>
  );
}
