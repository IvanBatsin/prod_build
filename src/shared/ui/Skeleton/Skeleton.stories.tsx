import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightRound: Story = {
  args: {
    height: 30,
    width: 30,
    border: "50%"
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const LightRectangle: Story = {
  args: {
    height: 60,
    width: 90
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const DarkRound: Story = {
  args: {
    height: 30,
    width: 30,
    border: "50%"
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const DarkRectangle: Story = {
  args: {
    height: 60,
    width: 90
  },
  decorators: [themeDecorator(Themes.DARK)]
};
