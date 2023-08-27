import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentsList } from "entities/Comment";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer, getArticleComment } from "../model/slices/ArticleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleDetailsCommentsIsLoading } from "../selectors/comments/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import AddCommentForm from "features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("articleDetails");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComment.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id) as any);
  });

  const handleSendComment = (text: string): void => {
    dispatch(addCommentForArticle(text) as any);
  };

  if (!id) {
    return (
      <div className={styles.container}>
        <span>{t("articleNotFound")}</span>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={styles.container}>
        <ArticleDetails id={id}/>
        <Text additionalClass={styles.comment_title} title={t("comment") || ""}/>
        <AddCommentForm sendComment={handleSendComment}/>
        <CommentsList comments={comments} isLoading={commentsIsLoading}/>
      </div>
    </DynamicModuleLoader>
  );
};

export default React.memo(ArticleDetailsPage);
