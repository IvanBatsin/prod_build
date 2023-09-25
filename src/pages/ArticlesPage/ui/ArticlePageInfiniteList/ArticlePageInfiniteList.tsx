import { ArticleList } from "entities/Article";
import { getArticlesPageIsLoading } from "pages/ArticlesPage/model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageView } from "pages/ArticlesPage/model/selectors/getArticlesPageView/getArticlesPageView";
import { getArticles } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import React from "react";
import { useSelector } from "react-redux";
import type { CommonComponentProps } from "shared/types/commonTypes";

export const ArticlePageInfiniteList: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticleList additionalClass={additionalClass} view={view} articles={articles} isLoading={isLoading}/>
  );
};
