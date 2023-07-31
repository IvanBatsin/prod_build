import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { ArticleType, type Article } from "../../types/article";
import { getArticleDetailsData } from "./getArticleDetailsData";

describe("get article details data from store", () => {
  test("should return article details data", () => {
    const data: Article = {
      blocks: [],
      createdAt: "12 of december",
      id: "12",
      img: "",
      subtitle: "test",
      title: "test title",
      type: [ArticleType.ECONOMICS],
      views: 12
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: { data, isLoading: false }
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: undefined
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
