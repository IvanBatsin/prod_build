import type { DropdownDirection } from "shared/types/ui";
import popupStyles from "./popup.module.scss";

export const directionMapper: Record<DropdownDirection, string> = {
  "bottom left": popupStyles.bottomLeft,
  "bottom right": popupStyles.bottomRight,
  "top left": popupStyles.topLeft,
  "top right": popupStyles.topRight
};
