import React, { type HtmlHTMLAttributes } from "react";
import styles from "./Card.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINE = "outline"
}

type CardProps = CommonComponentProps & HtmlHTMLAttributes<HTMLDivElement> & {
  theme?: CardTheme
};

export const Card: React.FC<CardProps> = (props) => {
  const { additionalClass, children, theme = CardTheme.NORMAL, ...otherProps } = props;
  return (
    <div className={classNames(styles.card, {}, [additionalClass, styles[theme]])} {...otherProps}>
      {children}
    </div>
  );
};
