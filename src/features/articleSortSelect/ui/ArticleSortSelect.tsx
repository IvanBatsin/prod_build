import React from "react";
import styles from "./ArticleSortSelect.module.scss";
import type { CommonComponentProps, SortOrderType } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select, type SelectOption } from "shared/ui/Select/Select";
import { ArticleSortType } from "entities/Article/model/types/article";

type ArticleSortSelectProps = CommonComponentProps & {
  sort: ArticleSortType
  order: SortOrderType
  handleChangeOrder: (order: any) => void
  handleChangeSort: (sort: any) => void
}

export const ArticleSortSelect: React.FC<ArticleSortSelectProps> = (props) => {
  const { additionalClass, order, sort, handleChangeOrder, handleChangeSort } = props;
  const { t } = useTranslation("article");

  const orderOptions: SelectOption[] = React.useMemo(() => {
    return [
      {
        content: t("ascending"),
        value: "asc"
      },
      {
        content: t("descending"),
        value: "desc"
      }
    ];
  }, [t]);

  const sortOptions: SelectOption[] = React.useMemo(() => {
    return [
      {
        content: t("creationDateSort"),
        value: ArticleSortType.CREATED_AT
      },
      {
        content: t("titleSort"),
        value: ArticleSortType.TITLE
      },
      {
        content: t("viewsSort"),
        value: ArticleSortType.VIEWS
      }
    ];
  }, [t]);

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      <Select
        options={sortOptions}
        label={t("chooseSortType") || ""}
        value={sort}
        onChange={handleChangeSort}
      />
      <Select
        options={orderOptions}
        label={t("mode") || ""}
        value={order}
        onChange={handleChangeOrder}
        additionalClass={styles.order}
      />
    </div>
  );
};
