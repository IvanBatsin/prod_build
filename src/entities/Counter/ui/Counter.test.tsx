import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { fireEvent, screen } from "@testing-library/react";

describe("Counter component", () => {
  test("Counter render", () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 10 } }, route: "/" });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("Click increment button", () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 10 } }, route: "/" });
    const incrementBtn = screen.getByTestId("increment-button");
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("Click decrement button", () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 10 } }, route: "/" });
    const decrementBtn = screen.getByTestId("decrement-button");
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
