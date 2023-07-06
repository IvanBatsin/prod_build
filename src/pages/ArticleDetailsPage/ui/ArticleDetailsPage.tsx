import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";

const ArticleDetailsPage: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("article");
  return (
    <div className={styles.container}>
      <h2>{t("details")}</h2>
    </div>
  );
};

export default React.memo(ArticleDetailsPage);
