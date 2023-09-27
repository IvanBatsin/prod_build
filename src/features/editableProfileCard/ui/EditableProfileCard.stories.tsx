import type { Meta, StoryObj } from "@storybook/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { storeDecorator } from "shared/config/storybook/storeDecorator";
import type { Profile } from "../model/types/profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const meta = {
  title: "featues/EditableProfileCard",
  component: EditableProfileCard,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const profileData: Profile = {
  age: 12,
  avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm",
  city: "Moscow",
  country: Country.Russia,
  currency: Currency.EUR,
  firstName: "firstName",
  id: "1",
  lastName: "lastName",
  username: "username"
};

export const Light: Story = {
  args: {
    id: "1"
  },
  decorators: [themeDecorator(Themes.LIGHT), storeDecorator({ profile: { isLoading: false, readonly: false, data: profileData } })]
};

export const Dark: Story = {
  args: {
    id: "1"
  },
  decorators: [themeDecorator(Themes.DARK), storeDecorator({ profile: { isLoading: false, readonly: false, data: profileData } })]
};

export const Orange: Story = {
  args: {
    id: "1"
  },
  decorators: [themeDecorator(Themes.ORANGE), storeDecorator({ profile: { isLoading: false, readonly: false, data: profileData } })]
};
