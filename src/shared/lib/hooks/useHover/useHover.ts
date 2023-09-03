import React from "react";

interface UseHoveeBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseMouseHoverResult = [
  boolean,
  UseHoveeBind
];

export const useHover = (): UseMouseHoverResult => {
  const [isHoverd, setIsHovered] = React.useState<boolean>(false);

  const onMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsHovered(false);
  }, []);

  return [isHoverd, { onMouseEnter, onMouseLeave }];
};
