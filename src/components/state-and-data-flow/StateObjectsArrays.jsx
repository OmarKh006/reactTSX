import TodoList from "./TodoList";
import TaskListV2 from "./TodoListV2";

export default function StateObjectsArrays() {
  return (
    <div className="demo">
      <h1>State: Objects & Arrays</h1>
      <section>
        <TodoList />
        <TaskListV2 />
      </section>
    </div>
  );
}
