import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import TestIcon from "../../../widgets/Sidebar/assets/aboutLink.svg";

const meta = {
  title: "shared/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    SVG: TestIcon
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const DarkTheme: Story = {
  args: {
    SVG: TestIcon
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const OrangeTheme: Story = {
  args: {
    SVG: TestIcon
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
