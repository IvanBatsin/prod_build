import React from "react";

export const useDebounce = (callback: (...args: any[]) => void, delay: number): () => void => {
  const timer = React.useRef<any>();

  return React.useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
