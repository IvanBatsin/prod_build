import { rtkApi } from "shared/api/rtkQueryApi";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationList: build.query({
      query: (limit: number) => ({
        url: "/articles",
        params: {
          _limit: limit
        }
      })
    })
  }),
  overrideExisting: false
});

export const useArticleRecommendationList = recommendationsApi.useGetArticleRecommendationListQuery;
