import type { Meta, StoryObj } from "@storybook/react";
import { type DrobdownItem, Dropdown } from "./Dropdown";
import { routerDecorator } from "shared/config/storybook/routerDecorator";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "shared/Popups/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = "Test text for test";
const items: DrobdownItem[] = [
  {
    content: <div>{`${text} - 1`}</div>
  },
  {
    content: <div>{`${text} - 2`}</div>
  },
  {
    content: <div>{`${text} - 3 (disabled)`}</div>,
    disabled: true
  },
  {
    content: <div>{`${text} - 4 (href)`}</div>,
    href: "test"
  }
];

const triggerText = "touch me";
const trigger = <button type="button">{triggerText}</button>;

export const LightBaseDiretion: Story = {
  args: {
    items,
    trigger
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};

export const DarkBaseDiretion: Story = {
  args: {
    items,
    trigger
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK)]
};

export const OrangeBaseDiretion: Story = {
  args: {
    items,
    trigger
  },
  decorators: [routerDecorator, themeDecorator(Themes.ORANGE)]
};

export const LightBottonLeft: Story = {
  args: {
    items,
    trigger,
    direction: "bottom left"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};

export const LightBottonRight: Story = {
  args: {
    items,
    trigger,
    direction: "bottom right"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};

export const LightTopRight: Story = {
  args: {
    items,
    trigger,
    direction: "top right"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};

export const LightTopLeft: Story = {
  args: {
    items,
    trigger,
    direction: "top left"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT)]
};
