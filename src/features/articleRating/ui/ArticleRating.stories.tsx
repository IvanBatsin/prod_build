import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";
import { storeDecorator } from "@/shared/config/storybook/storeDecorator";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Themes } from "@/app/providers/themeProvider";
import type { Rating } from "@/entities/Rating";

const data: Rating[] = [
  {
    feedback: "feedback",
    rate: 2
  }
];

const meta = {
  title: "featues/ArticleRating",
  component: ArticleRating,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articleRatings?userId="1"&articleId="1"`,
        method: "GET",
        status: 200,
        response: data
      }
    ]
  }
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    articleId: "1"
  },
  decorators: [storeDecorator({
    user: {
      authData: {
        id: "1",
        username: "username"
      }
    }
  }), themeDecorator(Themes.LIGHT)]
};

export const Dark: Story = {
  args: {
    articleId: "1"
  },
  decorators: [storeDecorator({
    user: {
      authData: {
        id: "1",
        username: "username"
      }
    }
  }), themeDecorator(Themes.DARK)]
};

export const Orange: Story = {
  args: {
    articleId: "1"
  },
  decorators: [storeDecorator({
    user: {
      authData: {
        id: "1",
        username: "username"
      }
    }
  }), themeDecorator(Themes.ORANGE)]
};

export const LightNoRating: Story = {
  args: {
    articleId: "1"
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/articleRatings?userId="1"&articleId="1"`,
        method: "GET",
        status: 200,
        response: []
      }
    ]
  },
  decorators: [storeDecorator({
    user: {
      authData: {
        id: "1",
        username: "username"
      }
    }
  }), themeDecorator(Themes.LIGHT)]
};
