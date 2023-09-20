import React from "react";
import styles from "./ArticlePage.module.scss";
import { ArticleList } from "entities/Article";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageIsLoading } from "../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageView } from "../../model/selectors/getArticlesPageView/getArticlesPageView";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlePageFilters } from "../ArticlePageFilters/ArticlePageFilters";
import { useSearchParams } from "react-router-dom";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage({ searchParams }) as any);
  });

  const handleLoadNextPart = React.useCallback(() => {
    dispatch(fetchNextArticlesPage(null) as any);
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper onScrollEndHandler={handleLoadNextPart}>
        <section className={styles.container}>
          <ArticlePageFilters/>
          <ArticleList additionalClass={styles.list} view={view} articles={articles} isLoading={isLoading}/>
        </section>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticlePage);
