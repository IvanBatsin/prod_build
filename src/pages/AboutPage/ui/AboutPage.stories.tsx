import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK)]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT)]
};
