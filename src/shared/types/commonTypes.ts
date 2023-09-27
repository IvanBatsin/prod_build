import type { ReactNode } from "react";

export interface CommonComponentProps {
  children?: ReactNode
  additionalClass?: string
}

export type SortOrderType = "asc" | "desc";
