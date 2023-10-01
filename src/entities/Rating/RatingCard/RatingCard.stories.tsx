import type { Meta, StoryObj } from "@storybook/react";
import { RatingCard } from "./RatingCard";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "entities/RatingCard",
  component: RatingCard,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = "Title";
const feedbackTitle = "FeedbackTitle";

export const Light: Story = {
  args: {
    title,
    feedbackTitle,
    hasFeedback: true
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const DarkWithNoFeedback: Story = {
  args: {
    title
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const Orange: Story = {
  args: {
    title,
    feedbackTitle,
    hasFeedback: true
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
