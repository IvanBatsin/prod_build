import type { Meta, StoryObj } from "@storybook/react";
import { NotificationList } from "./NotificationList";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import type { Notification } from "@/entities/Notification/model/types/notifications";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";

const data: Notification[] = [
  {
    id: "1",
    description: "description",
    title: "title",
    userId: "1"
  },
  {
    id: "2",
    description: "description",
    title: "title",
    userId: "1",
    href: "//"
  }
];

const meta = {
  title: "entities/NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: data
      }
    ]
  }
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({})]
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), storeDecorator({})]
};

export const Orange: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE), storeDecorator({})]
};

export const Loading: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: data,
        delay: 1000
      }
    ]
  },
  decorators: [themeDecorator(Themes.ORANGE), storeDecorator({})]
};
