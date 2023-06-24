import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { routerDecorator } from "shared/config/storybook/routerDecorator";

const meta = {
  title: "widget/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator]
};

export const Dark: Story = {
  args: {},
  decorators: [routerDecorator, themeDecorator(Themes.DARK)]
};
