import { CommentsList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComment } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";
import { getArticleDetailsCommentsIsLoading } from "pages/ArticleDetailsPage/selectors/comments/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { Text } from "shared/ui/Text/Text";

type ArticleDetailsCommentsProps = CommonComponentProps & {
  articleId: string
}

export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> = (props) => {
  const { articleId, additionalClass } = props;
  const comments = useSelector(getArticleComment.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const { t } = useTranslation("articleDetails");
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId) as any);
  });

  const handleSendComment = (text: string): void => {
    dispatch(addCommentForArticle(text) as any);
  };

  return (
    <VStack gap="8" max align="start" additionalClass={additionalClass}>
      <Text title={t("comment") || ""}/>
      <AddCommentForm sendComment={handleSendComment}/>
      <CommentsList comments={comments} isLoading={commentsIsLoading}/>
    </VStack>
  );
};
