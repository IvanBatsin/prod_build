import React from "react";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { RatingCard } from "@/entities/Rating";
import { useTranslation } from "react-i18next";
import { useAddArticleRating, useGetArticleRating } from "../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

type ArticleRatingProps = CommonComponentProps & {
  articleId: string
}

const ArticleRating: React.FC<ArticleRatingProps> = (props) => {
  const { additionalClass, articleId } = props;
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ""
  });
  const [addArticleRating] = useAddArticleRating();

  const handleRateArticle = (starCount: number, feedback?: string): void => {
    void addArticleRating({
      articleId,
      userId: userData?.id ?? "",
      rate: starCount,
      feedback
    });
  };

  const handleAddRatingAccept = (starCount: number, feedback?: string): void => {
    handleRateArticle(starCount, feedback);
  };

  const handleAddRatingCancel = (starCount: number): void => {
    handleRateArticle(starCount);
  };

  if (isLoading) {
    return <Skeleton width="100%" height={120}/>;
  };

  const rating = data?.[0];

  return (
    <RatingCard
      rateNumber={rating?.rate}
      additionalClass={additionalClass}
      title={t("rateArticle") || ""}
      feedbackTitle={t("leaveReview") || ""}
      hasFeedback
      handleAccept={handleAddRatingAccept}
      handleCancel={handleAddRatingCancel}
    />
  );
};

export default ArticleRating;
