import React from "react";
import styles from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

type AppLinkProps = CommonComponentProps & LinkProps & {
  theme?: AppLinkTheme
};

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
  );
};
