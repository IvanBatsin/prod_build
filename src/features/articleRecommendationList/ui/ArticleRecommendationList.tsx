import React from "react";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { ArticleList } from "@/entities/Article";
import { useTranslation } from "react-i18next";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { useArticleRecommendationList } from "../api/articleRecommendationApi";

export const ArticleRecommendationList: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const { t } = useTranslation("articleDetails");
  const { isLoading, data: recommendedArticles, error } = useArticleRecommendationList(4);

  if (isLoading) {
    return (
      <Text title={t("loading") || ""}/>
    );
  }

  if (!isLoading && !recommendedArticles) {
    return null;
  }

  return (
    <VStack gap="8" additionalClass={additionalClass}>
      <Text size={TextSize.L} title={t("recommendedArticles") || ""}/>
        {!error && !isLoading && recommendedArticles &&
          <ArticleList
            isVirtual={false}
            articles={recommendedArticles}
            isLoading={isLoading}
            target={"_blank"}
          />
        }
    </VStack>
  );
};
