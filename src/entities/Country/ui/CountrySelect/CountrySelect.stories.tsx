import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelector } from "./CountrySelect";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import { Country } from "@/entities/Country/model/types/country";

const meta = {
  title: "entities/CountrySelector",
  component: CountrySelector,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CountrySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: Country.Russia
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ReadOnly: Story = {
  args: {
    value: Country.Russia,
    readonly: true
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
