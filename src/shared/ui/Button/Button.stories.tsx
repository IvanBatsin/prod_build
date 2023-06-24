import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSizes, ButtonTypes } from "./Button";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReloadLight: Story = {
  args: {
    children: "Reload",
    theme: ButtonTypes.RELOAD
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ReloadDark: Story = {
  args: {
    children: "Reload",
    theme: ButtonTypes.RELOAD
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const ClearLight: Story = {
  args: {
    children: "Clear",
    theme: ButtonTypes.CLEAR
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ClearDark: Story = {
  args: {
    children: "Clear",
    theme: ButtonTypes.CLEAR
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const ClearInvertedLight: Story = {
  args: {
    children: "Clear inverted",
    theme: ButtonTypes.CLEAR_INVERTED
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ClearInvertedDark: Story = {
  args: {
    children: "Clear inverted",
    theme: ButtonTypes.CLEAR_INVERTED
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const OutlineLight: Story = {
  args: {
    children: "Outline",
    theme: ButtonTypes.OUTLINE
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const OutlineDark: Story = {
  args: {
    children: "Outline",
    theme: ButtonTypes.OUTLINE
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const BackgroungLight: Story = {
  args: {
    children: "Backgroung",
    theme: ButtonTypes.BACKGROUND
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const BackgroungDark: Story = {
  args: {
    children: "Backgroung",
    theme: ButtonTypes.BACKGROUND
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const InverteBackgroungLight: Story = {
  args: {
    children: "InverteBackgroung",
    theme: ButtonTypes.BACKGROUND_INVERTED
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const InverteBackgroungDark: Story = {
  args: {
    children: "InverteBackgroung",
    theme: ButtonTypes.BACKGROUND_INVERTED
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const ButtonDisabledLight: Story = {
  args: {
    children: "ButtonXL",
    disabled: true
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ButtonDisabledDark: Story = {
  args: {
    children: "ButtonXL",
    disabled: true
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const SquareButtonXL: Story = {
  args: {
    children: "SquareButtonXL",
    square: true,
    size: ButtonSizes.XL
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const SquareButtonL: Story = {
  args: {
    children: "SquareButtonL",
    square: true,
    size: ButtonSizes.L
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const SquareButtonM: Story = {
  args: {
    children: "SquareButtonM",
    square: true,
    size: ButtonSizes.M
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ButtonXL: Story = {
  args: {
    children: "ButtonXL",
    size: ButtonSizes.XL
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
