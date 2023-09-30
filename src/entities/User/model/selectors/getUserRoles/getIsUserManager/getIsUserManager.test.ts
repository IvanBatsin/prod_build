import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getIsUserManager } from "./getIsUserManager";
import { Roles } from "@/entities/User/model/types/user";

describe("Get is user manager test:", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [Roles.MANAGER],
          id: "1",
          username: "user"
        }
      }
    };
    expect(getIsUserManager(state as StateSchema)).toEqual(true);
  });

  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [Roles.ADMIN],
          id: "1",
          username: "user"
        }
      }
    };
    expect(getIsUserManager(state as StateSchema)).toEqual(false);
  });
});
