import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ArticlePage.module.scss";

const ArticlePage: React.FC = () => {
  const { t } = useTranslation("article");
  return (
    <div className={styles.container}>
      <h2>{t("title")}</h2>
    </div>
  );
};

export default React.memo(ArticlePage);
