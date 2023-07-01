import React from "react";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterAction } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = "increment";
  const decrement = "decrement";

  const handleIncrement = (): void => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = (): void => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h2 data-testid="value-title">{counterValue}</h2>
      <Button data-testid="increment-button" onClick={handleIncrement}>{increment}</Button>
      <Button data-testid="decrement-button" onClick={handleDecrement}>{decrement}</Button>
    </div>
  );
};
