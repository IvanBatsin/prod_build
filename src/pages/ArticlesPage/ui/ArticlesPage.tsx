import React from "react";
import styles from "./ArticlePage.module.scss";
import { ArticleList, ArticleViewSelector } from "entities/Article";
import type { ArticleView } from "entities/Article/model/types/article";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageActions, articlesPageReducer, getArticles } from "../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import { getArticlesPageIsLoading } from "../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageView } from "../model/selectors/getArticlesPageView/getArticlesPageView";
import { PageWrapper } from "shared/ui/PageWrapper/PageWrapper";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }) as any);
  });

  const handleChangeView = (view: ArticleView): void => {
    dispatch(articlesPageActions.setView(view));
    dispatch(articlesPageActions.initState());
  };

  const handleLoadNextPart = React.useCallback(() => {
    dispatch(fetchNextArticlesPage(null) as any);
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper onScrollEndHandler={handleLoadNextPart}>
        <section className={styles.container}>
          <ArticleViewSelector view={view} handleViewClick={handleChangeView}/>
          <ArticleList view={view} articles={articles} isLoading={isLoading}/>
        </section>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticlePage);
