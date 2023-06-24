import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { routerDecorator } from "shared/config/storybook/routerDecorator";
import { storeDecorator } from "shared/config/storybook/storeDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "widget/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightUnauthorizedUser: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator, storeDecorator({ user: { authData: undefined } })]
};

export const DarkUnauthorizedUser: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), routerDecorator, storeDecorator({ user: { authData: undefined } })]
};

export const LightAuthorizedUser: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator, storeDecorator({ user: { authData: { username: "test", id: "s" } } })]
};

export const DarkAuthorizedUser: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), routerDecorator, storeDecorator({ user: { authData: { username: "test", id: "s" } } })]
};
