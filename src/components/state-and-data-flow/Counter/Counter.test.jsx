import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from ".";

describe("counter program test", () => {
  test("everythin renders correctly", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("+").closest("button")).toBeInTheDocument();
    expect(screen.getByText("-").closest("button")).toBeInTheDocument();
  });

  test("increment and decrement", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });

    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
