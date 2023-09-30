import type { StateSchema } from "@/app/providers/StoreProvider";
import type { ScrollRestoreSchema } from "../../types/scrollRestoreSchema";

export const getScrollRestore = (state: StateSchema): ScrollRestoreSchema => state.scrollRestore;
