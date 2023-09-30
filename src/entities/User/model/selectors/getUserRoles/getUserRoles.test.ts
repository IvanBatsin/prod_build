import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getUserRoles } from "./getUserRoles";
import { Roles } from "../../types/user";

describe("Get user roles test:", () => {
  test("should return roles", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [Roles.ADMIN],
          id: "1",
          username: "user"
        }
      }
    };
    expect(getUserRoles(state as StateSchema)).toEqual([Roles.ADMIN]);
  });

  test("work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserRoles(state as StateSchema)).toEqual(undefined);
  });
});
