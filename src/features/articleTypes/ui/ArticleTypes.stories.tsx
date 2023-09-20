import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTypes } from "./ArticleTypes";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { ArticleType } from "entities/Article/model/types/article";

const meta = {
  title: "featues/ArticleTypes",
  component: ArticleTypes,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ArticleTypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    currentType: ArticleType.ALL,
    handleChangeCurrentType: () => {}
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {
    currentType: ArticleType.SCIENCE,
    handleChangeCurrentType: () => {}
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const Orange: Story = {
  args: {
    currentType: ArticleType.IT,
    handleChangeCurrentType: () => {}
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
