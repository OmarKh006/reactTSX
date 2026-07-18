import { useState, useEffect } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
}
export default function TaskListV2() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3",
      );
      const data: Task[] = await response.json();

      const formattedTasks = data.map((task) => ({
        id: task.id,
        title: task.title,
        completed: task.completed,
        important: Math.random() > 0.5, // Random for demo
      }));

      setTasks(formattedTasks);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className="task-list">
      {tasks.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          {item.title}
          {item.important && <span className="important">!</span>}
        </li>
      ))}
    </ul>
  );
}
