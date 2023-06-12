import React, { type ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";

export enum ButtonTypes {
  CLEAR = "clear",
  RELOAD = "reload",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted"
}

export enum ButtonSizes {
  M = "size_m",
  L = "size_l",
  XL = "size_xl"
}

type ButtonProps = CommonComponentProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTypes
  square?: boolean
  size?: ButtonSizes
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { additionalClass, square, size = ButtonSizes.M, theme = ButtonTypes.CLEAR, children, ...restProps } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: !!square,
    [styles[size]]: !!size
  };

  return (
    <button type="button" className={classNames(styles.btn, mods, [additionalClass, styles[theme]])} {...restProps}>{children}</button>
  );
};
