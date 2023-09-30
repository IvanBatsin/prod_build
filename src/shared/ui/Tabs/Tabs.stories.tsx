import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, type TabItem } from "./Tabs";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs: TabItem[] = [
  {
    content: "Test 1",
    value: "test 1"
  },
  {
    content: "Test 2",
    value: "test 2"
  },
  {
    content: "Test 3",
    value: "test 3"
  }
];

export const Light: Story = {
  args: {
    tabs,
    value: "test 1",
    handleTabClick: (tab) => {}
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {
    tabs,
    value: "test 1",
    handleTabClick: (tab) => {}
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const Orange: Story = {
  args: {
    tabs,
    value: "test 1",
    handleTabClick: (tab) => {}
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
