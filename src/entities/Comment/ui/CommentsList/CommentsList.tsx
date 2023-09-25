import React from "react";
import styles from "./CommentsList.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import type { Comment } from "entities/Comment/model/types/comment";
import { VStack } from "shared/ui/Stack/VStack/VStack";

type CommentsListProps = CommonComponentProps & {
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentsList: React.FC<CommentsListProps> = (props) => {
  const { isLoading, comments, additionalClass } = props;
  const { t } = useTranslation("comments");

  if (!comments?.length) {
    return (
      <Text title={t("none") || ""}/>
    );
  }

  return (
    <VStack max additionalClass={additionalClass} align="start" gap="4">
      {comments?.length &&
        comments.map(comment => {
          return <CommentCard isLoading={isLoading} additionalClass={styles.comment} key={comment.id} comment={comment}/>;
        })
      }
    </VStack>
  );
};
