import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { routerDecorator } from "shared/config/storybook/routerDecorator";
import { storeDecorator } from "shared/config/storybook/storeDecorator";
import type { User } from "entities/User";

const meta = {
  title: "widget/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const authData: User = {
  id: "12",
  username: "test"
};

export const LightAuthorized: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator, storeDecorator({ user: { authData } })]
};

export const DarkAuthorized: Story = {
  args: {},
  decorators: [routerDecorator, themeDecorator(Themes.DARK), storeDecorator({ user: { authData } })]
};

export const LightUnauthorized: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator, storeDecorator({ user: undefined })]
};

export const DarkUnauthorized: Story = {
  args: {},
  decorators: [routerDecorator, themeDecorator(Themes.DARK), storeDecorator({ user: undefined })]
};
