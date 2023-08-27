import React from "react";

export const useInitialEffect = (fn: () => void): void => {
  React.useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      fn();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
