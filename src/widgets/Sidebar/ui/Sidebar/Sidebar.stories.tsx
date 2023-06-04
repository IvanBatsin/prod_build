import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from "./Sidebar";
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Themes } from 'app/providers/themeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {},
};
