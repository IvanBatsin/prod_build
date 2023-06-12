import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSizes, ButtonTypes } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reload: Story = {
  args: {
    children: "Reload",
    theme: ButtonTypes.RELOAD
  }
};

export const Clear: Story = {
  args: {
    children: "Clear",
    theme: ButtonTypes.CLEAR
  }
};

export const Outline: Story = {
  args: {
    children: "Outline",
    theme: ButtonTypes.OUTLINE
  }
};

export const Backgroung: Story = {
  args: {
    children: "Backgroung",
    theme: ButtonTypes.BACKGROUND
  }
};

export const InverteBackgroung: Story = {
  args: {
    children: "InverteBackgroung",
    theme: ButtonTypes.BACKGROUND_INVERTED
  }
};

export const SquareButtonXL: Story = {
  args: {
    children: "SquareButtonXL",
    square: true,
    size: ButtonSizes.XL
  }
};

export const SquareButtonL: Story = {
  args: {
    children: "SquareButtonL",
    square: true,
    size: ButtonSizes.L
  }
};

export const SquareButtonM: Story = {
  args: {
    children: "SquareButtonM",
    square: true,
    size: ButtonSizes.M
  }
};

export const ButtonXL: Story = {
  args: {
    children: "ButtonXL",
    size: ButtonSizes.XL
  }
};
