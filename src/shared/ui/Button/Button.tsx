import React, { type ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";

export enum ButtonTypes {
  CLEAR = "clear",
  CLEAR_INVERTED = "clear_inverted",
  RELOAD = "reload",
  OUTLINE = "outline",
  OUTLINE_RED = "outlineRed",
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

export const Button: React.FC<ButtonProps> = React.memo(function Button (props: ButtonProps) {
  const { additionalClass, square, disabled, size = ButtonSizes.M, theme = ButtonTypes.CLEAR, children, ...restProps } = props;

  const mods: Mods = {
    [styles.square]: !!square,
    [styles[size]]: !!size,
    [styles.disabled]: disabled
  };

  return (
    <button disabled={disabled} type="button" className={classNames(styles.btn, mods, [additionalClass, styles[theme]])} {...restProps}>{children}</button>
  );
});
