import React from "react";
import styles from './AppLink.module.scss';
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  additionalClass?: string,
  theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { additionalClass, children, to, theme = AppLinkTheme.PRIMARY, ...restProps } = props;

  return (
    <Link 
      to={to} 
      className={classNames(styles.link, {}, [additionalClass, styles[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  )
}