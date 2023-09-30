import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";
import type { Article } from "@/entities/Article";
import { routerDecorator } from "@/shared/config/storybook/routerDecorator";
import type { User } from "@/entities/User";
import { ArticleType } from "@/entities/Article/model/consts/consts";

const meta = {
  title: "pages/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const articleData: Article = {
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

const authData: User = {
  id: "1",
  username: "test username"
};

export const DarkWithAuthData: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), storeDecorator({ articleDetails: { isLoading: false, error: "", data: articleData }, user: { authData } }), routerDecorator]
};

export const LightWithAuthData: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({ articleDetails: { isLoading: false, error: "", data: articleData }, user: { authData } }), routerDecorator]
};

export const OrangeWithAuthData: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE), storeDecorator({ articleDetails: { isLoading: false, error: "", data: articleData }, user: { authData } }), routerDecorator]
};

export const OrangeWithNoAuthData: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({ articleDetails: { isLoading: false, error: "", data: articleData }, user: undefined }), routerDecorator]
};
