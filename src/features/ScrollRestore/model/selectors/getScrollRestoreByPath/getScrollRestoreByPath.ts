import { createSelector } from "@reduxjs/toolkit";
import { getScrollRestore } from "../getScrollRestore/getScrollRestore";
import type { StateSchema } from "@/app/providers/StoreProvider";

export const getScrollRestoreByPath = createSelector(
  getScrollRestore,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll.scroll[path] || 0
);
