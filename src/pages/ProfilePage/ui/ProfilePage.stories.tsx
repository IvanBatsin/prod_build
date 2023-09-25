import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { storeDecorator } from "shared/config/storybook/storeDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { routerDecorator } from "shared/config/storybook/routerDecorator";
import type { Profile } from "features/editableProfileCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "pages/Profile",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const profile: Profile = {
  firstName: "John",
  lastName: "Jons",
  age: 23,
  currency: Currency.RUB,
  country: Country.Belarus,
  city: "Moscow",
  username: "admin",
  avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
};

export const Dark: Story = {
  args: {},
  decorators: [themeDecorator(Themes.DARK), storeDecorator({
    profile: {
      data: profile,
      isLoading: false,
      readonly: false
    }
  }), routerDecorator]
};

export const Light: Story = {
  args: {},
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({
    profile: {
      data: profile,
      isLoading: false,
      readonly: false
    }
  }), routerDecorator]
};

export const Orange: Story = {
  args: {},
  decorators: [themeDecorator(Themes.ORANGE), storeDecorator({
    profile: {
      data: profile,
      isLoading: false,
      readonly: false
    }
  }), routerDecorator]
};
