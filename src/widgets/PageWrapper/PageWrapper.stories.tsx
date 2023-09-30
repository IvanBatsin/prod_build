import type { Meta, StoryObj } from "@storybook/react";
import { PageWrapper } from "./PageWrapper";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";
import { routerDecorator } from "@/shared/config/storybook/routerDecorator";

const meta = {
  title: "widgets/PageWrapper",
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
  decorators: [themeDecorator(Themes.DARK), storeDecorator({}), routerDecorator]
};

export const PageWrapperLight: Story = {
  args: { children },
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({}), routerDecorator]
};

export const PageWrapperOrange: Story = {
  args: { children },
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({}), routerDecorator]
};
