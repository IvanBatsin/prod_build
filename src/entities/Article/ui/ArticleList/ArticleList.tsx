import React, { type HTMLAttributeAnchorTarget, useMemo } from "react";
import styles from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { type Article, ArticleView } from "entities/Article/model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListSkeleton } from "../ArticleListItem/ArticleListItemTypes/ArticleListItemSkeleton";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

type ArticleListProps = CommonComponentProps & {
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
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
  const { additionalClass, articles, view = ArticleView.SMALL, isLoading, target } = props;
  const { t } = useTranslation("article");

  const renderArticles = useMemo(() => {
    return articles.map(article => <ArticleListItem target={target} additionalClass={styles.list_item} key={article.id} article={article} view={view}/>);
  }, [articles, target, view]);

  if (!isLoading && !articles.length) {
    return (
      <div className={styles.empty}>
        <Text align={TextAlign.CENTER} size={TextSize.L} title={t("empty") || ""}/>
      </div>
    );
  }

  return (
    <div className={classNames(styles.container, {}, [additionalClass, styles[view]])}>
      {articles.length > 0
        ? renderArticles
        : null}
      {isLoading && getSkeletons(view, additionalClass)}
    </div>
  );
};
