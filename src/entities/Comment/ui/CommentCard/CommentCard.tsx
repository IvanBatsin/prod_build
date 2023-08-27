import React from "react";
import styles from "./CommentCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import type { Comment } from "entities/Comment/model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { CommentCardLoader } from "./CommentCardLoader";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { routePaths } from "shared/config/routerConfig/routerConfig";

type CommentCardProps = CommonComponentProps & {
  comment: Comment
  isLoading?: boolean
};

export const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { additionalClass, comment, isLoading } = props;

  if (isLoading) return <CommentCardLoader/>;

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      <AppLink to={`${routePaths.profile}/${comment.id}`} className={styles.header}>
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={30}/>}
        <Text additionalClass={styles.username} title={comment.user.username}/>
      </AppLink>
      <Text additionalClass={styles.text} text={comment.text}/>
    </div>
  );
};
