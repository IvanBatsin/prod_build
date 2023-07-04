import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import mockIcon from "./mockIcon.png";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    src: mockIcon
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
