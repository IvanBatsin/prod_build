import React from "react";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { routePaths } from "shared/config/routerConfig/routerConfig";
import { useTranslation } from "react-i18next";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useSelector } from "react-redux";
import { getCanUserEditArticle } from "pages/ArticleDetailsPage/selectors/article/getCanUserEditArticle";
import { getArticleDetailsData } from "entities/Article";
import { HStack } from "shared/ui/Stack/HStack/HStack";

export const ArticleDetailsPageHeader: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const navigate = useNavigate();
  const { t } = useTranslation("articleDetails");
  const canEdit = useSelector(getCanUserEditArticle);
  const article = useSelector(getArticleDetailsData);

  const handleReturnToList = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    navigate(routePaths.articles);
  };

  const handleArticleEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (article) {
      navigate(`${routePaths.articles}/${article.id}/edit`);
    }
  };

  return (
    <HStack additionalClass={additionalClass} justify="between">
      {canEdit && <Button onClick={handleArticleEdit} theme={ButtonTypes.OUTLINE}>{t("editArticle")}</Button>}
      <Button onClick={handleReturnToList} theme={ButtonTypes.OUTLINE}>{t("returnToTheList")}</Button>
    </HStack>
  );
};
