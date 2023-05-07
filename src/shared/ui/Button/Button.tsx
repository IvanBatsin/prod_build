import React, { ButtonHTMLAttributes } from "react";
import styles from './Button.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { CommonComponentProps } from "shared/types/commonTypes";

enum ButtonTypes {
  CLEAR = 'clear'
}

type ButtonProps = CommonComponentProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTypes
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { additionalClass, theme = ButtonTypes.CLEAR, children, ...restProps } = props;

  return (
    <button className={classNames(styles.btn, {}, [additionalClass, styles[theme]])} {...restProps}>{children}</button>
  )
}