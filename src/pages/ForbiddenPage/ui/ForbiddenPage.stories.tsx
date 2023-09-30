import type { Meta, StoryObj } from "@storybook/react";
import ForbiddenPage from "./ForbiddenPage";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK)]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Orange: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE)]
};
