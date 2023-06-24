import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDark: Story = {
  args: {
    children: "Modal is open",
    isOpen: true
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const ModalLight: Story = {
  args: {
    children: "Modal is open",
    isOpen: true
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
