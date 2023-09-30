import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithPlaceholderLight: Story = {
  args: {
    placeholder: "username"
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const InputWithPlaceholderDark: Story = {
  args: {
    placeholder: "username"
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const InputWithFocusLight: Story = {
  args: {
    placeholder: "username",
    autofocus: true
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const InputWithFocusDark: Story = {
  args: {
    placeholder: "username",
    autofocus: true
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const InputWithValueLight: Story = {
  args: {
    placeholder: "username",
    value: "Johnny"
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const InputWithValueDark: Story = {
  args: {
    placeholder: "username",
    value: "Johnny"
  },
  decorators: [themeDecorator(Themes.DARK)]
};
