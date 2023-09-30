import React from "react";
import styles from "./Modal.module.scss";
import type { CommonComponentProps } from "@/[object Object]";
import { type Mods, classNames } from "@/[object Object]";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "@/[object Object]";

type ModalProps = CommonComponentProps & {
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
};

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, additionalClass, children, lazy, onClose } = props;

  const { isClosing, isMounted, handleClose } = useModal({
    animationDelay: ANIMATION_DELAY,
    handleCloseFn: onClose,
    isOpen
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [additionalClass, "app_modal"])}>
        <Overlay handleClick={handleClose}/>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
