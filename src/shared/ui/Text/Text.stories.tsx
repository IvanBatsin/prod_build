import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextSize, TextThemes } from "./Text";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextWithTitle: Story = {
  args: {
    title: "Test title"
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const TextWithText: Story = {
  args: {
    text: "Test text and some text to test"
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const TextWithTextAndTitle: Story = {
  args: {
    title: "Test title",
    text: "Test text and some text to test"
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const TextLightTheme: Story = {
  args: {
    title: "Test title",
    text: "Test text and some text to test"
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const TextError: Story = {
  args: {
    title: "Test title",
    text: "Test text and some text to test",
    theme: TextThemes.ERROR
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const TextLargeLightTheme: Story = {
  args: {
    title: "Test title",
    text: "Test text and some text to test",
    size: TextSize.L
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
