import React from "react";
import styles from "./Skeleton.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";

type SkeletonProps = CommonComponentProps & {
  height?: number | string
  width?: number | string
  border?: string
};

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { additionalClass, border, height, width } = props;

  const inlineStyles: React.CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return (
    <div className={classNames(styles.container, {}, [additionalClass])} style={inlineStyles}></div>
  );
};
