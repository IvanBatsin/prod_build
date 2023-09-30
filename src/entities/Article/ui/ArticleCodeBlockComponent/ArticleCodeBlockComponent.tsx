import type { ArticleCodeBlock } from "@/entities/Article/model/types/article";
import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import styles from "./ArticleCodeBlockComponent.module.scss";
import { Code } from "@/shared/ui/Code/Code";

type ArticleCodeBlockComponentProps = CommonComponentProps & {
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = (props) => {
  const { block, additionalClass } = props;
  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      <Code codeFragment={block.code}/>
    </div>
  );
};
