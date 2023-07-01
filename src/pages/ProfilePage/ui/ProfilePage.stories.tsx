import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { storeDecorator } from "shared/config/storybook/storeDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "pages/Profile",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), storeDecorator({})]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({})]
};
