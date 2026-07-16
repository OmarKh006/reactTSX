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
});
