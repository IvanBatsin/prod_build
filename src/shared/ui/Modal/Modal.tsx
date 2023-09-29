import React from "react";
import styles from "./Modal.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";

type ModalProps = CommonComponentProps & {
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
};

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, additionalClass, children, lazy, onClose } = props;

  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const timerRef = React.useRef<NodeJS.Timeout>();

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  };

  const handleClose = React.useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleKeyDown = React.useCallback((event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  React.useEffect(() => {
    isOpen && setIsMounted(true);
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  React.useEffect(() => {
    return () => {
      timerRef?.current && clearTimeout(timerRef.current);
    };
  }, []);

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
