import React, { type MutableRefObject } from "react";
import styles from "./PageWrapper.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useInfinteScroll } from "shared/lib/hooks/useInfinteScroll/useInfinteScroll";

type PageWrapperProps = CommonComponentProps & {
  onScrollEndHandler?: () => void
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { additionalClass, children, onScrollEndHandler } = props;
  const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>;

  useInfinteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEndHandler
  });

  return (
    <div ref={wrapperRef} className={classNames(styles.container, {}, [additionalClass])}>
      {children}
      <div ref={triggerRef}></div>
    </div>
  );
};
