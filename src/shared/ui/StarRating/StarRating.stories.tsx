import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    selectedStar: 2
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {
    size: 40
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Orange: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE)]
};
