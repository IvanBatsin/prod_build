import React, { useMemo } from "react";
import styles from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { type Article, ArticleView } from "entities/Article/model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListSkeleton } from "../ArticleListItem/ArticleListItemTypes/ArticleListItemSkeleton";

type ArticleListProps = CommonComponentProps & {
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView, additionalClass: string | undefined): JSX.Element => {
  return (
    <div className={classNames(styles.container, {}, [additionalClass, styles[view]])}>
      {new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0).map((item, index) => <ArticleListSkeleton additionalClass={additionalClass} key={index} view={view}/>)
      }
    </div>
  );
};

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { additionalClass, articles, view = ArticleView.SMALL, isLoading } = props;

  const renderArticles = useMemo(() => {
    return articles.map(article => <ArticleListItem additionalClass={styles.list_item} key={article.id} article={article} view={view}/>);
  }, [articles, view]);

  if (isLoading) {
    return getSkeletons(view, additionalClass);
  }

  return (
    <div className={classNames(styles.container, {}, [additionalClass, styles[view]])}>
      {articles.length > 0
        ? renderArticles
        : null}
    </div>
  );
};
