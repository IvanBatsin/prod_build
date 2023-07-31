import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { articleReducer } from "../../model/slice/articleDetailsSlice";
import React from "react";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getArticleDetailsError } from "entities/Article/model/selectors/getArticleDetailsError/getArticleDetailsError";
import { getArticleDetailsIsLoading } from "entities/Article/model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { getArticleDetailsData } from "entities/Article/model/selectors/getArticleDetailsData/getArticleDetailsData";
import styles from "./ArticleDetails.module.scss";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { ArticleDetailsSkeletonLoader } from "./ArticleDetailsSkeletonLoader/ArticleDetailsSkeletonLoader";
import { ArticleDetailsContent } from "./ArticleDetailsContent/ArticleDetailsContent";
import { ArticleBlockType, type ArticleBlock } from "../../../../entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

const reducers: ReducersList = {
  articleDetails: articleReducer
};

interface ArticleDetailsProps {
  id: string
}

const renderBlock = (block: ArticleBlock): JSX.Element | null => {
  switch (block.type) {
    case ArticleBlockType.CODE: {
      return <ArticleCodeBlockComponent key={block.id} additionalClass={styles.block_item} block={block}/>;
    }

    case ArticleBlockType.IMAGE: {
      return <ArticleImageBlockComponent key={block.id} additionalClass={styles.block_item} block={block}/>;
    }

    case ArticleBlockType.TEXT: {
      return <ArticleTextBlockComponent key={block.id} additionalClass={styles.block_item} block={block}/>;
    }

    default: return null;
  }
};

export const ArticleDetails: React.FC<ArticleDetailsProps> = React.memo(function ArticleDetails (props: ArticleDetailsProps) {
  const { t } = useTranslation("articleDetails");
  const { id } = props;
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);

  let content;

  if (isLoading) {
    content = (
      <ArticleDetailsSkeletonLoader/>
    );
  } else if (error) {
    content = (
      <Text
       align={TextAlign.CENTER}
       title={t("error") || ""}
      />
    );
  } else {
    content = (
      <div>
        <ArticleDetailsContent article={article}/>
        {article?.blocks.map(renderBlock)}
      </div>
    );
  }

  React.useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id) as any);
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={styles.container}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
