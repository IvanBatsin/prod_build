import type { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";
import type { Article } from "@/entities/Article";
import { routerDecorator } from "@/shared/config/storybook/routerDecorator";
import { ArticleType } from "@/entities/Article/model/consts/consts";

const meta = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticleDetailsPage>;

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
  types: [ArticleType.IT]
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), storeDecorator({ articleDetails: { isLoading: false, error: "", data } }), routerDecorator]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({ articleDetails: { isLoading: false, error: "", data } }), routerDecorator]
};
