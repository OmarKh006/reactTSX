import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import TaskList from ".";

describe("TaskList component functions", () => {
  test("renders TaskList component", () => {
    render(<TaskList />);
  });
});
