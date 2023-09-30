import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Popups/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = "Test text";
const children = <div><p>{text}</p></div>;
const triggerText = "touch me";
const trigger = <button type="button">{triggerText}</button>;

export const LightBaseDiretion: Story = {
  args: {
    children,
    trigger
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const DarkBaseDiretion: Story = {
  args: {
    children,
    trigger
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const OrangeBaseDiretion: Story = {
  args: {
    children,
    trigger
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
