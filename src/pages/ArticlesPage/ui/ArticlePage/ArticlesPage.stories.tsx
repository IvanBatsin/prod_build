import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { storeDecorator } from "shared/config/storybook/storeDecorator";
import { type Article, ArticleView } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/types/article";
import type { ArticlesPageSchema } from "pages/ArticlesPage/model/types/ArticlesPageSchema";
import { routerDecorator } from "shared/config/storybook/routerDecorator";

const meta = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: Article = {
  blocks: [],
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: {
    id: "1",
    username: "username"
  },
  type: [ArticleType.IT]
};

const ArticlePageData: ArticlesPageSchema = {
  entities: { 1: { ...data } },
  ids: ["1"],
  view: ArticleView.BIG,
  hasMore: true,
  order: "asc",
  page: 1,
  search: "",
  sort: ArticleSortType.CREATED_AT,
  limit: 9,
  currentType: ArticleType.ALL
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), storeDecorator({ articlesPage: ArticlePageData }), routerDecorator]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({ articlesPage: ArticlePageData }), routerDecorator]
};

export const Orange: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE), storeDecorator({ articlesPage: ArticlePageData }), routerDecorator]
};
