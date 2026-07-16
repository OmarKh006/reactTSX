import TaskList from "./TaskList";
import UserStatus from "./UserStatus";

export default function ConditionalRendering() {
  return (
    <div className="demo">
      <h1>Conditional Rendering & Lists</h1>

      <section>
        <h2>Conditional (if/else) with Ternary</h2>
        <UserStatus isOnline /> {/* <UserStatus isOnline={true} /> */}
        <UserStatus /> {/* <UserStatus isOnline={false} /> */}
      </section>

      <section>
        <h2>Lists and Conditional (&amp;&amp;)</h2>
        <TaskList />
      </section>
    </div>
  );
}
