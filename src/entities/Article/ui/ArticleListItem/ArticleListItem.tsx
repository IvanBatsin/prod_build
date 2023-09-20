import React, { type HTMLAttributeAnchorTarget } from "react";
import styles from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { type Article, ArticleView } from "entities/Article/model/types/article";
import { ArticleListItemBig } from "./ArticleListItemTypes/ArticleListItemBig";
import { ArticleListItemSmall } from "./ArticleListItemTypes/ArticleListItemSmall";

type ArticleListItemProps = CommonComponentProps & {
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
};

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { additionalClass, article, view, target } = props;

  return (
    <div className={classNames(styles.container, {}, [additionalClass, styles[view]])}>
      {view === ArticleView.BIG
        ? <ArticleListItemBig target={target} article={article}/>
        : <ArticleListItemSmall target={target} article={article}/>}
    </div>
  );
};
