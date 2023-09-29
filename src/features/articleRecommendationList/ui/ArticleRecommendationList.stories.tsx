import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecommendationList } from "./ArticleRecommendationList";
import { storeDecorator } from "shared/config/storybook/storeDecorator";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import type { Article } from "entities/Article";
import { ArticleType } from "entities/Article/model/consts/consts";

const data: Article = {
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

const meta = {
  title: "featues/ArticleRecommendationList",
  component: ArticleRecommendationList,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: data
      }
    ]
  }
} satisfies Meta<typeof ArticleRecommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [storeDecorator({}), themeDecorator(Themes.LIGHT)]
};
