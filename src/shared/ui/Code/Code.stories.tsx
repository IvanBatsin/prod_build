import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";

const meta = {
  title: "shared/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    codeFragment: `const meta = {
      title: "shared/Code",
      component: Code,
      tags: ["autodocs"],
      argTypes: {}
    } satisfies Meta<typeof Code>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;`
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const DarkTheme: Story = {
  args: {
    codeFragment: `const meta = {
      title: "shared/Code",
      component: Code,
      tags: ["autodocs"],
      argTypes: {}
    } satisfies Meta<typeof Code>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;`
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const OrangeTheme: Story = {
  args: {
    codeFragment: `const meta = {
      title: "shared/Code",
      component: Code,
      tags: ["autodocs"],
      argTypes: {}
    } satisfies Meta<typeof Code>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;`
  },
  decorators: [themeDecorator(Themes.ORANGE)]
};
