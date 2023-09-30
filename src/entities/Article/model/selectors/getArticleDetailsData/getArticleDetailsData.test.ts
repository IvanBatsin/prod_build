import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { type Article } from "../../types/article";
import { getArticleDetailsData } from "./getArticleDetailsData";
import { ArticleType } from "../../consts/consts";

describe("get article details data from store", () => {
  test("should return article details data", () => {
    const data: Article = {
      blocks: [],
      createdAt: "12 of december",
      id: "12",
      img: "",
      subtitle: "test",
      title: "test title",
      types: [ArticleType.ECONOMICS],
      user: {
        id: "1",
        username: "MockUser",
        avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
      },
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
