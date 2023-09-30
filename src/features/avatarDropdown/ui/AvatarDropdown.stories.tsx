import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdown } from "./AvatarDropdown";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";
import { Roles } from "@/entities/User/model/types/user";
import { routerDecorator } from "@/shared/config/storybook/routerDecorator";

const meta = {
  title: "entities/AvatarDropdown",
  component: AvatarDropdown,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAdmin: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator, storeDecorator({
    user: {
      authData: {
        id: "1",
        username: "username",
        roles: [Roles.MANAGER],
        avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
      }
    }
  })]
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator, storeDecorator({
    user: {
      authData: {
        id: "1",
        username: "username",
        roles: [Roles.USER],
        avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
      }
    }
  })]
};
