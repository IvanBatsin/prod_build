import React, { type HtmlHTMLAttributes } from "react";
import styles from "./Card.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";

type CardProps = CommonComponentProps & HtmlHTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = (props) => {
  const { additionalClass, children, ...otherProps } = props;
  return (
    <div className={classNames(styles.card, {}, [additionalClass])} {...otherProps}>
      {children}
    </div>
  );
};
