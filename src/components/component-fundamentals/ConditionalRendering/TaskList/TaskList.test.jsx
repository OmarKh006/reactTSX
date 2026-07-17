import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TaskList from ".";

describe("TaskList component functions", () => {
  test("renders TaskList component", () => {
    render(<TaskList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice Props")).toBeInTheDocument();
    expect(screen.getByText("Take a Break")).toBeInTheDocument();
  });

  test("important tasks have a ! mark", () => {
    render(<TaskList />);
    expect(screen.getByTestId("important")).toBeInTheDocument();
  });

  test("completed tasks have the completed class", () => {
    render(<TaskList />);
    expect(screen.getByText("Learn React")).toHaveClass("completed");
  });

  test("snapshot the component", () => {
    const { container } = render(<TaskList />);
    expect(container).toMatchSnapshot();
  });
});
