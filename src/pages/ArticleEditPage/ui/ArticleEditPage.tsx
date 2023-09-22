import React from "react";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";

const ArticleEditPage: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;

  return (
    <PageWrapper additionalClass={classNames("", {}, [additionalClass])}>

    </PageWrapper>
  );
};

export default ArticleEditPage;
