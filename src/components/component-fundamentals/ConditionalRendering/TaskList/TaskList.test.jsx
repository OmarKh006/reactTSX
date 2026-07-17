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
    expect(screen.getByTestId("important")).toBeDefined();
  });

  test("completed tasks have the completed class", () => {
    render(<TaskList />);
    expect(screen.getByText("Learn React").classList).toContain("completed");
  });

  test("snapshot the component", () => {
    const { container } = render(<TaskList />);
    expect(container).toMatchSnapshot();
  });
});
