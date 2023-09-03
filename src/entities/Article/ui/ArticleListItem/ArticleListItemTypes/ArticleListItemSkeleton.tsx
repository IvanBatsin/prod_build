import React from "react";
import styles from "../ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleView } from "entities/Article/model/types/article";

type ArticleListSkeletonProps = CommonComponentProps & {
  view: ArticleView
}

export const ArticleListSkeleton: React.FC<ArticleListSkeletonProps> = (props) => {
  const { additionalClass, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(styles.container, {}, [additionalClass])}>
        <Card>
          <div className={styles.header}>
            <Skeleton border="50%" width={30} height={30}/>
            <Skeleton additionalClass={styles.username} width={150} height={16}/>
            <Skeleton additionalClass={styles.date} width={150} height={16}/>
          </div>
          <Skeleton width={250} height={24} additionalClass={styles.title}/>
          <Skeleton width={200} additionalClass={styles.img}/>
          <div className={styles.footer}>
            <Skeleton width={200} height={36} additionalClass={styles.title}/>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.SMALL, {}, [additionalClass])}>
      <Card>
        <div className={styles.imgWrapper}>
          <Skeleton width={200} height={200} additionalClass={styles.img}/>
        </div>
        <div className={styles.infoWrapper}>
         <Skeleton width={130} height={16} additionalClass={styles.img}/>
        </div>
        <Skeleton width={160} height={16} additionalClass={styles.img}/>
      </Card>
    </div>
  );
};
