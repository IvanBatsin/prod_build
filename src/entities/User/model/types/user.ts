export enum Roles {
  MANAGER = "MANAGER",
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: Roles[]
};

export interface UserSchema {
  authData?: User
  inited?: boolean
};
