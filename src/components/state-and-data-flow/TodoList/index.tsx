import { FormEvent, useState } from "react";

interface TodoState {
  id: number;
  text: string;
  completed: boolean;
  details: {
    priority: string;
    category: {
      name: string;
      color: string;
    };
  };
}

function TodoList() {
  const [todoInput, setTodoInput] = useState({ text: "", completed: false });
  const [todos, setTodos] = useState<TodoState[]>([
    {
      id: 1,
      text: "Learn React",
      completed: false,
      details: {
        priority: "high",
        category: {
          name: "study",
          color: "blue",
        },
      },
    },
    {
      id: 2,
      text: "Build Projects",
      completed: false,
      details: {
        priority: "medium",
        category: {
          name: "work",
          color: "green",
        },
      },
    },
  ]);

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: todoInput.text,
      completed: todoInput.completed,
      details: {
        priority: "low",
        category: {
          name: "general",
          color: "gray",
        },
      },
    };

    setTodos([...todos, newTodo]);
    setTodoInput({ ...todoInput, text: "" });
  };

  const handleUpdateCategory = (todoId: TodoState["id"], newColor: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              details: {
                ...todo.details,
                category: {
                  ...todo.details.category,
                  color: newColor,
                },
              },
            }
          : todo,
      ),
    );
  };

  const handleToggle = (id: TodoState["id"]) => {
    const UpdatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(UpdatedTodos);
  };

  const handleDelete = (id: TodoState["id"]) => {
    const NewTodos = todos.filter((todo) => todo.id !== id);
    setTodos(NewTodos);
  };

  return (
    <div className="todo-list">
      <form className="add-todo" onSubmit={handleAddTodo}>
        <input
          value={todoInput.text}
          onChange={(e) => setTodoInput({ ...todoInput, text: e.target.value })}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <div
              className="category-color"
              data-testid="category-color"
              style={{ backgroundColor: todo.details.category.color }}
              onClick={() =>
                handleUpdateCategory(
                  todo.id,
                  todo.details.category.color === "blue" ? "green" : "blue",
                )
              }
            />
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
