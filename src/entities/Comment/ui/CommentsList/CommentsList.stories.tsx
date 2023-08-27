import type { Meta, StoryObj } from "@storybook/react";
import { CommentsList } from "./CommentsList";
import { themeDecorator } from "shared/config/storybook/themeDecorator";
import { Themes } from "app/providers/themeProvider";
import type { Comment } from "entities/Comment/model/types/comment";
import { routerDecorator } from "shared/config/storybook/routerDecorator";

const meta = {
  title: "entities/CommentsList",
  component: CommentsList,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CommentsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments: Comment[] = [
  {
    id: "1",
    text: "test text",
    user: {
      id: "1",
      username: "User name",
      avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
    }
  },
  {
    id: "2",
    text: "second text",
    user: {
      id: "2",
      username: "Very cool name",
      avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
    }
  }
];

export const Light: Story = {
  args: {
    isLoading: false,
    comments
  },
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator]
};

export const Dark: Story = {
  args: {
    isLoading: false,
    comments
  },
  decorators: [themeDecorator(Themes.DARK), routerDecorator]
};

export const Orange: Story = {
  args: {
    isLoading: false,
    comments
  },
  decorators: [themeDecorator(Themes.ORANGE), routerDecorator]
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comments
  },
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator]
};

export const EmptyComments: Story = {
  args: {
    isLoading: true,
    comments: []
  },
  decorators: [themeDecorator(Themes.LIGHT), routerDecorator]
};
