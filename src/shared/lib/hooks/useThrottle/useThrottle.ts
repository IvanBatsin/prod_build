import React from "react";

export const useThrottle = (callback: (...args: any[]) => void, delay: number): () => void => {
  const throttleRef = React.useRef<boolean>(false);

  return React.useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
};
