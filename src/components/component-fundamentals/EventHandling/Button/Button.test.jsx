import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from ".";

describe("some tests", () => {
  test("button rendering", () => {
    render(<Button />);
  });

  test("button label works correctly", () => {
    render(<Button label="Hello" />);
    expect(screen.getByRole("button", { name: "Hello" })).toBeVisible();
  });

  test("passed event is being called", () => {
    const onClickHandler = vi.fn();
    render(<Button label="Hello" onClick={onClickHandler} />);
    fireEvent.click(screen.getByText("Hello"));
    expect(onClickHandler).toBeCalled();
  });
});
