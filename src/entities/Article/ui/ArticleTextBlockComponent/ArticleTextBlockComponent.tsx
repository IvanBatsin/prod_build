import type { ArticleTextBlock } from "@/entities/Article/model/types/article";
import React from "react";
import styles from "./ArticleTextBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { Text } from "@/shared/ui/Text/Text";

type ArticleTextBlockComponentProps = CommonComponentProps & {
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = (props) => {
  const { block, additionalClass } = props;

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      {block.title && <Text title={block.title} additionalClass={styles.title}/>}
      {block.paragraphs.map(paragraph => {
        return <Text key={paragraph} text={paragraph} additionalClass={styles.paragraph}/>;
      })}
    </div>
  );
};
