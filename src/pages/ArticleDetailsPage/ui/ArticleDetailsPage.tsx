import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";

const ArticleDetailsPage: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("articleDetails");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={styles.container}>
        <span>{t("articleNotFound")}</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>{t("details")}</h2>
      <ArticleDetails id={id}/>
    </div>
  );
};

export default React.memo(ArticleDetailsPage);
