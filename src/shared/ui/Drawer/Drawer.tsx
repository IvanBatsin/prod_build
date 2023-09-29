import React from "react";
import styles from "./Drawer.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useTheme } from "app/providers/themeProvider";
import { classNames, type Mods } from "shared/lib/classNames/classNames";
import { Portal } from "@headlessui/react";
import { Overlay } from "../Overlay/Overlay";

type DrawerProps = CommonComponentProps & {
  isOpen?: boolean
  handleClose?: () => void
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { additionalClass, children, isOpen, handleClose } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [styles.open]: isOpen
  };

  return (
    <Portal>
      <div className={classNames(styles.container, mods, [additionalClass, theme, "app_drawer"])}>
        <Overlay handleClick={handleClose}/>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
