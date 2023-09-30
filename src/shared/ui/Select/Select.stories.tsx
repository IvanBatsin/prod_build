import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    label: "Test label",
    options: [
      { value: "Test 1", content: "First option" },
      { value: "Test 2", content: "Second option" }
    ]
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
