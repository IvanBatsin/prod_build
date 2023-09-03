import React from "react";
import styles from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { type Article, ArticleView } from "entities/Article/model/types/article";
import { ArticleListItemBig } from "./ArticleListItemTypes/ArticleListItemBig";
import { ArticleListItemSmall } from "./ArticleListItemTypes/ArticleListItemSmall";
import { useNavigate } from "react-router-dom";
import { routePaths } from "shared/config/routerConfig/routerConfig";

type ArticleListItemProps = CommonComponentProps & {
  article: Article
  view: ArticleView
};

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { additionalClass, article, view } = props;
  const navigate = useNavigate();

  const handleArticleClick = (): void => {
    navigate(`${routePaths.articleDetails}/${article.id}`);
  };

  return (
    <div className={classNames(styles.container, {}, [additionalClass, styles[view]])}>
      {view === ArticleView.BIG
        ? <ArticleListItemBig article={article} handleArticleClick={handleArticleClick}/>
        : <ArticleListItemSmall article={article} handleArticleClick={handleArticleClick}/>}
    </div>
  );
};
