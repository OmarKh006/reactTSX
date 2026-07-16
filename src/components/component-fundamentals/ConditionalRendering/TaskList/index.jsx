export default function TaskList() {
  const tasks = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Practice Props", completed: false },
    { id: 3, title: "Take a Break", completed: false, important: true },
  ];

  return (
    <ul className="task-list">
      {tasks.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          {item.title}
          {item.important && (
            <span className="important" data-testid="important">
              !
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
