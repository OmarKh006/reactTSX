import { render, screen } from "@testing-library/react";
import TodoListV2 from ".";
import { describe, test, expect, vi } from "vitest";

window.fetch = vi.fn();

describe("TaskListV2 component", () => {
  test("loading state", () => {
    render(<TodoListV2 />);
    expect(screen.getByText("Loading tasks...")).toBeInTheDocument();
  });

  test("error state", async () => {
    fetch.mockRejectedValue(new Error(""));

    render(<TodoListV2 />);
    expect(
      await screen.findByText("Error: Failed to load tasks"),
    ).toBeInTheDocument();
  });

  test("success state", async () => {
    const tasks = [
      {
        id: 1,
        title: "Learn React",
        completed: true,
      },
      {
        id: 2,
        title: "Build Projects",
        completed: false,
      },
    ];
    fetch.mockResolvedValue({
      json: vi.fn().mockResolvedValue(tasks),
    });
    render(<TodoListV2 />);
    expect(screen.getByText("Loading tasks...")).toBeInTheDocument();

    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos?_limit=3",
    );
    expect(await screen.findByText("Learn React")).toBeInTheDocument();
    expect(await screen.findByText("Build Projects")).toBeInTheDocument();
  });
});
