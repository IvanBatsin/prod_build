import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import type { AddCommentFormSchema } from "@/features/addCommentForm/model/types/addComentFormSchema";

const meta = {
  title: "featues/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const addCommentFormState: AddCommentFormSchema = {
  error: "",
  text: "test text"
};

export const Light: Story = {
  args: {},
  decorators: [storeDecorator({ addCommentForm: addCommentFormState }), themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {},
  decorators: [storeDecorator({ addCommentForm: addCommentFormState }), themeDecorator(Themes.DARK)]
};

export const Orange: Story = {
  args: {},
  decorators: [storeDecorator({ addCommentForm: addCommentFormState }), themeDecorator(Themes.ORANGE)]
};
