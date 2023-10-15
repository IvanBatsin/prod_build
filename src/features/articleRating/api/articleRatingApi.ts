import type { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkQueryApi";

interface GetArticleRatingPayload {
  userId: string
  articleId: string
}

interface AddArticleRatingPayload extends GetArticleRatingPayload {
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRating: build.query<Rating[], GetArticleRatingPayload>({
      query: ({ articleId, userId }) => ({
        url: "/articleRatings",
        params: { userId, articleId }
      })
    }),
    addArticleRating: build.mutation<any, AddArticleRatingPayload>({
      query: (payload) => ({
        url: "/articleRatings",
        method: "POST",
        body: payload
      })
    })
  }),
  overrideExisting: false
});

export const useGetArticleRating = articleRatingApi.useGetRatingQuery;
export const useAddArticleRating = articleRatingApi.useAddArticleRatingMutation;
