import type { Decorator, Meta, StoryObj } from "@storybook/react";
import { type ListBoxItem, ListBox } from "./ListBox";
import { routerDecorator } from "shared/config/storybook/routerDecorator";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "shared/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = "Test text";
const items: ListBoxItem[] = [
  {
    content: <div>{`${text} - 1`}</div>,
    value: "1"
  },
  {
    content: <div>{`${text} - 2`}</div>,
    value: "2"
  },
  {
    content: <div>{`${text} - 3 (disabled)`}</div>,
    value: "3",
    disabled: true
  }
];

const decoratorForTest: Decorator = (Story) => <div style={{ padding: 20 }}><Story/></div>;

export const LightBaseDiretion: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1"
  },
  decorators: [routerDecorator, themeDecorator(Themes.LIGHT), decoratorForTest]
};

export const DarkBaseDiretion: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK), decoratorForTest]
};

export const OrangeBaseDiretion: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1"
  },
  decorators: [routerDecorator, themeDecorator(Themes.ORANGE), decoratorForTest]
};

export const DarkBottomLeft: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1",
    direction: "bottom left"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK), decoratorForTest]
};

export const DarkBottomRight: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1",
    direction: "bottom right"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK), decoratorForTest]
};

export const DarkTopRight: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1",
    direction: "top right"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK), decoratorForTest]
};

export const DarkTopLeft: Story = {
  args: {
    items,
    defaultValue: "1",
    value: "1",
    direction: "top left"
  },
  decorators: [routerDecorator, themeDecorator(Themes.DARK), decoratorForTest]
};
