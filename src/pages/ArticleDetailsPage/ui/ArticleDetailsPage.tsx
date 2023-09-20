import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
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
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { routePaths } from "shared/config/routerConfig/routerConfig";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { getRecommendations } from "../model/slices/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice";
import { getArticleDetailsRecommendationsIsLoading } from "../selectors/recommendations/getArticleDetailsRecommendationsIsLoading/getArticleDetailsRecommendationsIsLoading";
import { getArticleDetailsRecommendationsError } from "../selectors/recommendations/getArticleDetailsRecommendationsError/getArticleDetailsRecommendationsError";
import { fetchRecommededArticles } from "../model/services/fetchRecommededArticles/fetchRecommededArticles";
import { articleDetailsPageReducer } from "../model/slices";

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
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id) as any);
    dispatch(fetchRecommededArticles(null) as any);
  });

  const handleSendComment = (text: string): void => {
    dispatch(addCommentForArticle(text) as any);
  };

  const handleReturnToList = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    navigate(routePaths.articles);
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
          <Button onClick={handleReturnToList} theme={ButtonTypes.OUTLINE}>{t("returnToTheList")}</Button>
          <ArticleDetails id={id}/>
          <Text size={TextSize.L} additionalClass={styles.comment_title} title={t("recommendedArticles") || ""}/>
          {!recommendationsError && !recommendationsIsLoading &&
            <ArticleList
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
