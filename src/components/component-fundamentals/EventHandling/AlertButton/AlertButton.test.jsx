import { render, screen, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import AlertButton from ".";

describe("some other tests", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("button label works correctly", () => {
    render(<AlertButton>Hello</AlertButton>);
    expect(screen.getByRole("button", { name: "Hello" })).toBeVisible();
  });

  test("passed event is being called", () => {
    const message = "Hello";
    window.alert = vi.fn((message) => message);
    render(<AlertButton message={message}>{message}</AlertButton>);
    fireEvent.click(screen.getByRole("button", { name: message }));
    expect(window.alert).toHaveReturned(message);
  });
});
