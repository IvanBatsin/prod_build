import React, { ButtonHTMLAttributes } from "react";
import styles from './Button.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

enum ButtonTypes {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClass?: string,
  theme?: ButtonTypes
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { additionalClass, theme = ButtonTypes.CLEAR, children, ...restProps } = props;

  return (
    <button className={classNames(styles.btn, {}, [additionalClass, styles[theme]])} {...restProps}>{children}</button>
  )
}