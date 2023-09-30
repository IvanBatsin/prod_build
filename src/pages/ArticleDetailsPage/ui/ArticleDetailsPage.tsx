import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, type ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { PageWrapper } from "@/widgets/PageWrapper/PageWrapper";
import { articleDetailsPageReducer } from "../model/slices";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationList } from "@/features/articleRecommendationList";
import { ArticleDetailsComments } from "./ArticleDetailsComments/ArticleDetailsComments";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("articleDetails");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <PageWrapper>
        <div className={styles.container}>
          <span>{t("articleNotFound")}</span>
        </div>
      </PageWrapper>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper>
        <div className={styles.container}>
          <ArticleDetailsPageHeader/>
          <ArticleDetails id={id}/>
          <ArticleRecommendationList additionalClass={styles.recommendations}/>
          <ArticleDetailsComments articleId={id}/>
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticleDetailsPage);
