import React from "react";
import styles from "./ArticleDetailsSkeletonLoader.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

export const ArticleDetailsSkeletonLoader: React.FC = () => {
  return (
    <>
      <Skeleton additionalClass={styles.avatarSkeleton} width={200} height={200} border="50%" />
      <Skeleton additionalClass={styles.titleSkeleton} width={300} height= {32} />
      <Skeleton additionalClass={styles.skeleton} width={600} height={24} />
      <Skeleton additionalClass={styles.skeleton} width="100%" height= {200} />
      <Skeleton additionalClass={styles.skeleton} width="100%" height={200} />
    </>
  );
};
