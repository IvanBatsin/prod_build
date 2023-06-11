import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark: Story = {
  args: {}
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT)]
};
