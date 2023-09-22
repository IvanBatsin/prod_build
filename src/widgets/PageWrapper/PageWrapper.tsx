import React, { type MutableRefObject } from "react";
import styles from "./PageWrapper.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useInfinteScroll } from "shared/lib/hooks/useInfinteScroll/useInfinteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getScrollRestoreByPath, scrollRestoreActions } from "features/ScrollRestore";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import type { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

type PageWrapperProps = CommonComponentProps & {
  onScrollEndHandler?: () => void
}

export const PAGE_ID = "pageId";

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { additionalClass, children, onScrollEndHandler } = props;
  const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollByPathPosition = useSelector((state: StateSchema) => getScrollRestoreByPath(state, location.pathname));

  useInfinteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEndHandler
  });

  useInitialEffect(() => {
    if (wrapperRef?.current) {
      wrapperRef.current.scrollTop = scrollByPathPosition;
    }
  });

  const handleScroll = useThrottle((event: React.UIEvent<HTMLDivElement>): void => {
    dispatch(scrollRestoreActions.setScrollPosition({ path: location.pathname, position: Number(event.currentTarget.scrollTop) }));
  }, 500);

  return (
    <section
      id={PAGE_ID}
      ref={wrapperRef}
      className={classNames(styles.container, {}, [additionalClass])}
      onScroll={handleScroll}
      >
      {children}
      {onScrollEndHandler && <div className={styles.trigger} ref={triggerRef}></div>}
    </section>
  );
};
