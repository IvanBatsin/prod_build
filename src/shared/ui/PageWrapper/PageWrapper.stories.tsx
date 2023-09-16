import type { Meta, StoryObj } from "@storybook/react";
import { PageWrapper } from "./PageWrapper";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "shared/PageWrapper",
  component: PageWrapper,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = "Test text for page wrapper";
const children = <div><p>{text}</p></div>;

export const PageWrapperDark: Story = {
  args: { children },
  decorators: [themeDecorator(Themes.DARK)]
};

export const PageWrapperLight: Story = {
  args: { children },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const PageWrapperOrange: Story = {
  args: { children },
  decorators: [themeDecorator(Themes.LIGHT)]
};
