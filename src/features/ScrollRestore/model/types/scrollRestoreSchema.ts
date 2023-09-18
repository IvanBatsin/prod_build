export type ScrollRestoreType = Record<string, number>;

export interface ScrollRestoreSchema {
  scroll: ScrollRestoreType
};

export interface SetScrollRestorePayload {
  path: string
  position: number
};
