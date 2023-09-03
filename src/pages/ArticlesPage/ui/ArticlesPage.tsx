import React from "react";
import styles from "./ArticlePage.module.scss";
import { ArticleList } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";

const ArticlePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ArticleList view={ArticleView.BIG} articles={[]}/>
    </div>
  );
};

export default React.memo(ArticlePage);
