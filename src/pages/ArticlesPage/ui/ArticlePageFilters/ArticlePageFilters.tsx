import React from "react";
import styles from "./ArticlePageFilters.module.scss";
import type { CommonComponentProps, SortOrderType } from "shared/types/commonTypes";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "pages/ArticlesPage/model/selectors/getArticlesPageView/getArticlesPageView";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleViewSelector, type ArticleView } from "entities/Article";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { ArticleSortSelect } from "features/articleSortSelect";
import { getArticlePageOrder } from "pages/ArticlesPage/model/selectors/getArticlePageOrder/getArticlePageOrder";
import { getArticlePageSort } from "pages/ArticlesPage/model/selectors/getArticlePageSort/getArticlePageSort";
import { getArticlePageSearch } from "pages/ArticlesPage/model/selectors/getArticlePageSearch/getArticlePageSearch";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { type TabItem } from "shared/ui/Tabs/Tabs";
import { getArticlePageCurrentType } from "pages/ArticlesPage/model/selectors/getArticlePageCurrentType/getArticlePageCurrentType";
import { ArticleTypes } from "features/articleTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { type ArticleSortType, type ArticleType } from "entities/Article/model/consts/consts";

export const ArticlePageFilters: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const { t } = useTranslation("article");
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const search = useSelector(getArticlePageSearch);
  const currentType = useSelector(getArticlePageCurrentType);
  const dispatch = useAppDispatch();

  const fetchData = (): void => {
    dispatch(fetchArticlesList({ replace: true }) as any);
  };

  const debounceFetchData = useDebounce(fetchData, 300);

  const handleChangeView = (view: ArticleView): void => {
    dispatch(articlesPageActions.setView(view));
    dispatch(articlesPageActions.initState());
  };

  const handleChangeCurrentType = (tab: TabItem): void => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setCurrentType(tab.value as ArticleType));
    fetchData();
  };

  const handleChangeOrder = (order: SortOrderType): void => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setOrder(order));
    fetchData();
  };

  const handleChangeSort = (sort: ArticleSortType): void => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setSort(sort));
    fetchData();
  };

  const handleChangeSearch = (search: string): void => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(articlesPageActions.setSearch(search));
    debounceFetchData();
  };

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelect
          order={order}
          sort={sort}
          handleChangeOrder={handleChangeOrder}
          handleChangeSort={handleChangeSort}
        />
        <ArticleViewSelector view={view} handleViewClick={handleChangeView}/>
      </div>
      <Card additionalClass={styles.search}>
        <Input value={search} placeholder={t("search") || ""} onChange={handleChangeSearch}/>
      </Card>
      <ArticleTypes
        additionalClass={styles.tabs}
        currentType={currentType}
        handleChangeCurrentType={handleChangeCurrentType}
      />
    </div>
  );
};
