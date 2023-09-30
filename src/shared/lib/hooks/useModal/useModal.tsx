import {
  type MutableRefObject, useCallback, useEffect, useRef, useState
} from "react";

interface UseModalProps {
  isOpen?: boolean
  animationDelay: number
  onClose?: () => void
}

interface UseModalResult {
  isClosing: boolean
  isMounted: boolean
  handleClose: () => void
}

export const useModal = (payload: UseModalProps): UseModalResult => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { animationDelay, isOpen, onClose } = payload;
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    handleClose
  };
};
