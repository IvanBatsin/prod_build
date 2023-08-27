import type { User } from "entities/User";

export interface Comment {
  user: User
  id: string
  text: string
};
