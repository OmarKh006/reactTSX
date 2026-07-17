import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TaskList from ".";

describe("TaskList component functions", () => {
  test("renders TaskList component", () => {
    render(<TaskList />);
    expect(screen.getByText("Learn React")).toBeDefined();
    expect(screen.getByText("Practice Props")).toBeDefined();
    expect(screen.getByText("Take a Break")).toBeDefined();
  });

  test("important tasks have a ! mark", () => {
    render(<TaskList />);

    const importantMark = screen.getByTestId("important");

    expect(importantMark).not.toBeNull();
    expect(importantMark.textContent).toContain("!");
  });

  test("completed tasks have the completed class", () => {
    render(<TaskList />);

    const completedTask = screen.getByText("Learn React").closest("li");
    const incompleteTask = screen.getByText("Practice Props").closest("li");

    expect(completedTask.classList.contains("completed")).toBe(true);
    expect(incompleteTask.classList.contains("completed")).toBe(false);
  });
});
