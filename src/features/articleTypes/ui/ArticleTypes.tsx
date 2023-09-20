import { ArticleType } from "entities/Article/model/types/article";
import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Tabs, type TabItem } from "shared/ui/Tabs/Tabs";

type ArticleTypesProps = CommonComponentProps & {
  currentType: ArticleType
  handleChangeCurrentType: (tab: TabItem) => void
}

export const ArticleTypes: React.FC<ArticleTypesProps> = (props) => {
  const { additionalClass, currentType, handleChangeCurrentType } = props;
  const { t } = useTranslation("article");

  const tabsTypes = React.useMemo<TabItem[]>(() => {
    return [
      {
        content: t("tabAll"),
        value: ArticleType.ALL
      },
      {
        content: t("tabIT"),
        value: ArticleType.IT
      },
      {
        content: t("tabEconomics"),
        value: ArticleType.ECONOMICS
      },
      {
        content: t("tabScience"),
        value: ArticleType.SCIENCE
      }
    ];
  }, [t]);

  return (
    <div className={classNames("", {}, [additionalClass])}>
      <Tabs
        tabs={tabsTypes}
        value={currentType}
        handleTabClick={handleChangeCurrentType}
      />
    </div>
  );
};
