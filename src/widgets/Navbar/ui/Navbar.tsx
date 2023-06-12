import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";

export const Navbar: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  return (
    <div className={classNames(styles.navbar, {}, [additionalClass])}>
      <div className={styles.links}></div>
    </div>
  );
};
