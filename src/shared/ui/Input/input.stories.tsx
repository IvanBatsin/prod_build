import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithPlaceholder: Story = {
  args: {
    placeholder: "username"
  }
};

export const InputIsFocues: Story = {
  args: {
    placeholder: "username",
    autofocus: true
  }
};

export const InputWithValue: Story = {
  args: {
    placeholder: "username",
    value: "Johnny"
  }
};
