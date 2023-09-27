import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getCanUserEditArticle } from "./getCanUserEditArticle";
import type { Article } from "entities/Article";
import { ArticleType } from "entities/Article/model/types/article";

describe("Get can user edit article", () => {
  const articleData: Article = {
    blocks: [],
    createdAt: "",
    id: "1",
    img: "",
    subtitle: "subtitle",
    title: "title",
    types: [ArticleType.ALL],
    user: {
      id: "1",
      username: "username"
    },
    views: 12
  };
  test("should return true value with same article author", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: articleData,
        isLoading: false
      },
      user: {
        authData: {
          username: "username",
          id: "1"
        }
      }
    };
    expect(getCanUserEditArticle(state as StateSchema)).toEqual(true);
  });

  test("should return false value with different article author", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: articleData,
        isLoading: false
      },
      user: {
        authData: {
          username: "username",
          id: "2"
        }
      }
    };
    expect(getCanUserEditArticle(state as StateSchema)).toEqual(false);
  });

  test("should false value with empty userData", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: articleData,
        isLoading: false
      },
      user: { authData: undefined }
    };
    expect(getCanUserEditArticle(state as StateSchema)).toEqual(false);
  });
});
