import React, { type MutableRefObject } from "react";

interface UseInfinteScrollProps {
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
  callback?: () => void
}

export const useInfinteScroll = ({ triggerRef, wrapperRef, callback }: UseInfinteScrollProps): void => {
  React.useEffect(() => {
    let observer: IntersectionObserver;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 1.0
      };
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer?.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
