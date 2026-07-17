import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import TodoList from ".";

describe("test TodoList component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test("initial render", () => {
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Projects")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add todo")).toBeInTheDocument();
  });

  test("add new todo", () => {
    const input = screen.getByPlaceholderText("Add todo").closest("input");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(addButton);

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("toggle todo", () => {
    const firstCheckBox = screen.getAllByRole("checkbox")[0];
    const firstTodo = screen.getByText("Learn React");

    expect(firstCheckBox).not.toBeChecked();
    expect(firstTodo).not.toHaveClass("completed");

    fireEvent.click(firstCheckBox);

    expect(firstCheckBox).toBeChecked();
    expect(firstTodo).toHaveClass("completed");

    fireEvent.click(firstCheckBox);

    expect(firstCheckBox).not.toBeChecked();
    expect(firstTodo).not.toHaveClass("completed");
  });

  test("delete todo", () => {
    const firstDeleteButton = screen.getAllByRole("button", {
      name: "Delete",
    })[0];

    fireEvent.click(firstDeleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

  test("update category of todo", () => {
    const firstCategoryButton = screen.getAllByTestId("category-color")[0];

    expect(firstCategoryButton.style.backgroundColor).toBe("blue");

    fireEvent.click(firstCategoryButton);

    expect(firstCategoryButton.style.backgroundColor).toBe("green");
  });
});

//TDD Test Driven Development
// Red - Green - Refactor
