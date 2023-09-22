import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentsList } from "entities/Comment";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComment } from "../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleDetailsCommentsIsLoading } from "../selectors/comments/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import AddCommentForm from "features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { getRecommendations } from "../model/slices/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice";
import { getArticleDetailsRecommendationsIsLoading } from "../selectors/recommendations/getArticleDetailsRecommendationsIsLoading/getArticleDetailsRecommendationsIsLoading";
import { getArticleDetailsRecommendationsError } from "../selectors/recommendations/getArticleDetailsRecommendationsError/getArticleDetailsRecommendationsError";
import { fetchRecommededArticles } from "../model/services/fetchRecommededArticles/fetchRecommededArticles";
import { articleDetailsPageReducer } from "../model/slices";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("articleDetails");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComment.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendations = useSelector(getRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);
  const recommendationsError = useSelector(getArticleDetailsRecommendationsError);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id) as any);
    dispatch(fetchRecommededArticles(null) as any);
  });

  const handleSendComment = (text: string): void => {
    dispatch(addCommentForArticle(text) as any);
  };

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
          <Text size={TextSize.L} additionalClass={styles.comment_title} title={t("recommendedArticles") || ""}/>
          {!recommendationsError && !recommendationsIsLoading &&
            <ArticleList
              isVirtual={false}
              articles={recommendations}
              isLoading={recommendationsIsLoading}
              additionalClass={styles.recommendations}
              target={"_blank"}
            />
          }
          <Text additionalClass={styles.comment_title} title={t("comment") || ""}/>
          <AddCommentForm sendComment={handleSendComment}/>
          <CommentsList comments={comments} isLoading={commentsIsLoading}/>
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticleDetailsPage);
