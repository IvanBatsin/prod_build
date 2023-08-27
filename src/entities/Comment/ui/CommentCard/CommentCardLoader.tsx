import React from "react";
import styles from "./CommentCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

export const CommentCardLoader: React.FC<CommonComponentProps> = (props) => {
  return (
    <div className={classNames(styles.container, {}, [props.additionalClass])}>
      <div className={styles.header}>
        <Skeleton width={30} height={30} border="50%"/>
        <Skeleton height={16} width={100} additionalClass={styles.username}/>
      </div>
      <Skeleton additionalClass={styles.text} width="100%" height={50}/>
    </div>
  );
};
