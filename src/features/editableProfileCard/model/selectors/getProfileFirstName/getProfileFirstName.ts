import type { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "../getProfileData/getProfileData";

export const getProfileFirstName = (state: StateSchema): string => getProfileData(state)?.firstName || "";
