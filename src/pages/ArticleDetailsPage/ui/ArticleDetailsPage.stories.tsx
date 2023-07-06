import type { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK)]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT)]
};
