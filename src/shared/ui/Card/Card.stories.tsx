import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardTheme } from "./Card";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockChildrenTest = "test string";

export const Light: Story = {
  args: {
    children: <span>{mockChildrenTest}</span>
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {
    children: <span>{mockChildrenTest}</span>
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const Orange: Story = {
  args: {
    children: <span>{mockChildrenTest}</span>
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};

export const Outline: Story = {
  args: {
    children: <span>{mockChildrenTest}</span>,
    theme: CardTheme.OUTLINE
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
