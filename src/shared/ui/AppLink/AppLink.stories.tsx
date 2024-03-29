import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { routerDecorator } from "@/shared/config/storybook/routerDecorator";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryLight: Story = {
  args: {
    children: "Primary link",
    theme: AppLinkTheme.PRIMARY,
    to: "/"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};

export const PrimaryDark: Story = {
  args: {
    children: "Primary link",
    theme: AppLinkTheme.PRIMARY,
    to: "/"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK)]
};

export const SecondaryLight: Story = {
  args: {
    children: "Secondary link",
    theme: AppLinkTheme.SECONDARY,
    to: "/"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};

export const SecondaryDark: Story = {
  args: {
    children: "Secondary link",
    theme: AppLinkTheme.SECONDARY,
    to: "/"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK)]
};
