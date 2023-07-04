import type { Meta, StoryObj } from "@storybook/react";
import { CurrencySelector } from "./CurrencySelector";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import { Currency } from "entities/Currency/model/types/currency";

const meta = {
  title: "entities/CurrencySelector",
  component: CurrencySelector,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CurrencySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: Currency.EUR
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};

export const ReadOnly: Story = {
  args: {
    value: Currency.EUR,
    readonly: true
  },
  decorators: [themeDecorator(Themes.LIGHT)]
};
