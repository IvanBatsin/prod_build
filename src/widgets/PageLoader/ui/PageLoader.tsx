import React from "react";
import styles from "./PageLoader.module.scss";
import { type CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames } from "@/shared/lib/classNames/classNames";

export const PageLoader: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  return (
    <div className={classNames(styles.page_loader, {}, [additionalClass])}>
      <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
