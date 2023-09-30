import React from "react";
import styles from "./Overlay.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames } from "@/shared/lib/classNames/classNames";

type OverlayProps = CommonComponentProps & {
  handleClick?: () => void
}

export const Overlay: React.FC<OverlayProps> = (props) => {
  const { additionalClass, handleClick } = props;

  return (
    <div onClick={handleClick} className={classNames(styles.overlay, {}, [additionalClass])}></div>
  );
};
