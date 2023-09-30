/* eslint-disable quote-props */
import React, { type DetailedHTMLProps, type HTMLAttributes } from "react";
import styles from "./Flex.module.scss";
import { type Mods, classNames } from "@/shared/lib/classNames/classNames";
import type { CommonComponentProps } from "@/shared/types/commonTypes";

type FlexJustify = "start" | "center" | "end" | "between";
type FlexAlign = "start" | "center" | "end" | "baseline";
type FlexDirection = "row" | "column";
type FlexGap = "4" | "8" | "16" | "32";

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type FlexProps = CommonComponentProps & DivProps & {
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  start: styles.justifyStart,
  between: styles.justifyBetween
};

const alignClasses: Record<FlexAlign, string> = {
  center: styles.alignCenter,
  end: styles.alignEnd,
  start: styles.alignStart,
  baseline: styles.alignBaseline
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  "4": styles.gap4,
  "8": styles.gap8,
  "16": styles.gap16,
  "32": styles.gap32
};

export const Flex: React.FC<FlexProps> = (props) => {
  const { additionalClass, children, align = "center", justify = "center", direction = "row", gap, max } = props;

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ];

  const mods: Mods = {
    [styles.maxWidth]: max
  };

  return (
    <div className={classNames(styles.container, mods, [additionalClass, ...classes])}>
      {children}
    </div>
  );
};
