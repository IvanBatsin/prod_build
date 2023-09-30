import type { Meta, StoryObj } from "@storybook/react";
import AdminPanelPage from "./AdminPanelPage";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof AdminPanelPage>;

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

export const Orange: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE)]
};
