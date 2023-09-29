import React from "react";
import styles from "./Popover.module.scss";
import popupStyles from "../styles/popup.module.scss";
import { Popover as HPopover } from "@headlessui/react";
import type { CommonComponentProps } from "shared/types/commonTypes";
import type { DropdownDirection } from "shared/types/ui";
import { classNames } from "shared/lib/classNames/classNames";
import { directionMapper } from "../styles/consts";

type PopoverProps = CommonComponentProps & {
  trigger: React.ReactNode
  direction?: DropdownDirection
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { additionalClass, trigger, direction = "bottom right", children } = props;

  return (
    <HPopover className={classNames(styles.container, {}, [additionalClass, popupStyles.popup])}>
      <HPopover.Button className={popupStyles.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(styles.panel, {}, [directionMapper[direction]])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
