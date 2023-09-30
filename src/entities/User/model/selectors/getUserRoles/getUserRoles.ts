import type { StateSchema } from "@/app/providers/StoreProvider";
import type { Roles } from "../../types/user";

export const getUserRoles = (state: StateSchema): Roles[] | undefined => state?.user?.authData?.roles;
