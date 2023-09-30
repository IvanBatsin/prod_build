import type { ArticleImageBlock } from "@/entities/Article/model/types/article";
import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import styles from "./ArticleImageBlockComponent.module.scss";
import { Text, TextAlign } from "@/shared/ui/Text/Text";

type ArticleImageBlockComponentProps = CommonComponentProps & {
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = (props) => {
  const { block, additionalClass } = props;

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      <img src={block.src} alt={block.title || ""} className={styles.img}/>
      {block.title && <Text title={block.title} align={TextAlign.CENTER}/>}
    </div>
  );
};
