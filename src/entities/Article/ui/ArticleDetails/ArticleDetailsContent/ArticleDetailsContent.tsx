import React from "react";
import styles from "./ArticleDetailsContent.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import type { Article } from "entities/Article/model/types/article";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import EyeIcon from "../../../../../shared/assets/eye.svg";
import CalendarIcon from "../../../../../shared/assets/calendar.svg";
import { Icon } from "shared/ui/IconComponent/Icon";

type ArticleDetailsContentProps = CommonComponentProps & {
  article: Article | undefined
};

export const ArticleDetailsContent: React.FC<ArticleDetailsContentProps> = (props) => {
  const { article, additionalClass } = props;
  return (
    <div className={classNames("", {}, [additionalClass])}>
      <div className={styles.avatarWrapper}>
        <Avatar
          size={200}
          src={article?.img || ""}
          additionalClass={styles.avatar}
        />
      </div>
      <Text
        title={article?.title}
        text={article?.subtitle}
        size={TextSize.L}
      />
      <div className={styles.articleInfo}>
        <Icon SVG={EyeIcon} additionalClass={styles.icon}/>
        <Text text={article?.views.toString()}/>
      </div>
      <div className={styles.articleInfo}>
        <Icon SVG={CalendarIcon} additionalClass={styles.icon}/>
        <Text text={article?.createdAt}/>
      </div>
    </div>
  );
};
