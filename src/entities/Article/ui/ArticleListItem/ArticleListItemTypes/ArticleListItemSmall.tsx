import React, { type HTMLAttributeAnchorTarget } from "react";
import styles from "../ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";
import type { Article } from "entities/Article/model/types/article";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/IconComponent/Icon";
import EyeIcon from "../../../../../shared/assets/eye.svg";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { routePaths } from "shared/config/routerConfig/routerConfig";

type ArticleListItemSmallProps = CommonComponentProps & {
  article: Article
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItemSmall: React.FC<ArticleListItemSmallProps> = (props) => {
  const { article, additionalClass, target } = props;
  const [_, bindHover] = useHover();

  return (
    <AppLink target={target} to={`${routePaths.articleDetails}/${article.id}`}>
      <div className={classNames(styles.SMALL, {}, [additionalClass])}>
        <Card {...bindHover}>
          <div className={styles.imgWrapper}>
            <img src={article.img} alt={article.title} className={styles.img}/>
            <Text text={article.createdAt} additionalClass={styles.date}/>
          </div>
          <div className={styles.infoWrapper}>
            <Text text={article.type.join(", ")} additionalClass={styles.types}/>
            <Text text={String(article.views)} additionalClass={styles.views}/>
            <Icon SVG={EyeIcon}/>
          </div>
          <Text title={article.title} additionalClass={styles.title}/>
        </Card>
      </div>
    </AppLink>
  );
};
