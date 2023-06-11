import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonTypes } from "./Button";

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
