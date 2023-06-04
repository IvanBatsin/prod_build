import { Button, ButtonTypes } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
  test("Button render", () => {
    const innerText = "Test";
    render(<Button>{innerText}</Button>);
    expect(screen.getByText(innerText)).toBeInTheDocument();
  });

  test("Button has theme class", () => {
    const innerText = "Test";
    render(<Button theme={ButtonTypes.CLEAR}>{innerText}</Button>);
    expect(screen.getByText(innerText)).toHaveClass(ButtonTypes.CLEAR);
    screen.debug();
  });
});
