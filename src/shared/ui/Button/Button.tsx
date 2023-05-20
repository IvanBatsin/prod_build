import React, { type ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";

export enum ButtonTypes {
  CLEAR = "clear",
  RELOAD = "reload"
}

type ButtonProps = CommonComponentProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTypes
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { additionalClass, theme = ButtonTypes.CLEAR, children, ...restProps } = props;

  return (
    <button type="button" className={classNames(styles.btn, {}, [additionalClass, styles[theme]])} {...restProps}>{children}</button>
  );
};
