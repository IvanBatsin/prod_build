import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import type { Profile } from "features/editableProfileCard/model/types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof ProfileCard>;

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

export const Light: Story = {
  args: {
    isLoading: false,
    profile
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {
    isLoading: false,
    profile
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const ReadOnly: Story = {
  args: {
    isLoading: false,
    profile,
    readonly: true
  },
  decorators: [themeDecorator(Themes.DARK)]
};

export const Loading: Story = {
  args: {
    isLoading: true,
    profile
  },
  decorators: [themeDecorator(Themes.DARK)]
};
