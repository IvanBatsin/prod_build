import React from "react";
import styles from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames, type Mods } from "@/shared/lib/classNames/classNames";

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
    onClose,
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
