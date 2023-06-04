import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTypes } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Reload: Story = {
  args: {
    children: "Reload",
    theme: ButtonTypes.RELOAD
  },
};

export const Clear: Story = {
  args: {
    children: "Clear",
    theme: ButtonTypes.CLEAR
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    theme: ButtonTypes.OUTLINE
  },
};