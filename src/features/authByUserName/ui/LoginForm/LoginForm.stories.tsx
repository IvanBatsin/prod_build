import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { storeDecorator } from "shared/config/storybook/storeDecorator";
import { type LoginSchema } from "features/authByUserName/model/types/loginSchema";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "featues/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const loginState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
  error: ""
};

export const Light: Story = {
  args: {},
  decorators: [storeDecorator({ login: loginState }), themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {},
  decorators: [storeDecorator({ login: loginState }), themeDecorator(Themes.DARK)]
};
