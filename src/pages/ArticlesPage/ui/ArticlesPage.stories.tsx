import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticlesPage>;

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
