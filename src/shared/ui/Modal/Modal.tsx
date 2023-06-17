import React from "react";
import styles from "./Modal.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/themeProvider";

type ModalProps = CommonComponentProps & {
  isOpen: boolean
  onClose: () => void
};

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, additionalClass, children, onClose } = props;
  const { theme } = useTheme();

  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  const timerRef = React.useRef<NodeJS.Timeout>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
    [styles[theme]]: true
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

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  };

  const handleKeyDown = React.useCallback((event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

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

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [additionalClass])}>
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
