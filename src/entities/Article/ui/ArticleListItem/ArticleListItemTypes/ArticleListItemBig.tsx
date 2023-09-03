import React from "react";
import styles from "../ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { ArticleBlockType, type Article, type ArticleTextBlock } from "entities/Article/model/types/article";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent/ArticleTextBlockComponent";

type ArticleListItemBigProps = CommonComponentProps & {
  article: Article
  handleArticleClick: () => void
}

export const ArticleListItemBig: React.FC<ArticleListItemBigProps> = (props) => {
  const { article, additionalClass, handleArticleClick } = props;
  const { t } = useTranslation("article");

  const textBlock = React.useMemo(() => {
    return article.blocks.find(block => block.type === ArticleBlockType.TEXT);
  }, [article.blocks]) as ArticleTextBlock;

  return (
    <div className={classNames(styles.container, {}, [additionalClass])}>
      <Card>
        <div className={styles.header}>
          <Avatar src={article.user.avatar || ""} size={30}/>
          <Text additionalClass={styles.username} text={article.user.username}/>
          <Text additionalClass={styles.date} text={article.createdAt}/>
        </div>
        <Text text={article.title} additionalClass={styles.title}/>
        <Text text={article.type.join(", ")} additionalClass={styles.types}/>
        <img src={article.img} alt={article.title} className={styles.img}/>
        {textBlock && <ArticleTextBlockComponent block={textBlock} additionalClass={styles.textBlock}/>}
        <div className={styles.footer}>
          <Button onClick={handleArticleClick} theme={ButtonTypes.OUTLINE}>{t("readMore")}</Button>
          <Text text={String(article.views)} additionalClass={styles.views}/>
        </div>
      </Card>
    </div>
  );
};
