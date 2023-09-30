import React from "react";
import styles from "./Drawer.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { useTheme } from "@/app/providers/themeProvider";
import { classNames, type Mods } from "@/shared/lib/classNames/classNames";
import { Portal } from "@headlessui/react";
import { Overlay } from "../Overlay/Overlay";
import { useAnimationLibs } from "@/shared/lib/components/AnimationProvider/AnimationProvider";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";

export type DrawerProps = CommonComponentProps & {
  isOpen?: boolean
  isLazy?: boolean
  handleClose?: () => void
}

const HEIGHT = window.innerHeight - 100;

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { additionalClass, children, isOpen, isLazy, handleClose } = props;
  const { theme } = useTheme();
  const { isClosing, isMounted, handleClose: handleCloseFn } = useModal({
    animationDelay: 300,
    isOpen,
    onClose: handleClose
  });
  const { Gesture, Spring } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: HEIGHT }));

  const mods: Mods = {
    [styles.open]: isOpen,
    [styles.isClosing]: isClosing
  };

  const openDrawer = React.useCallback((): void => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const closeDrawer = (velocity: number = 0): void => {
    api.start({
      y: HEIGHT,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: handleCloseFn
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > HEIGHT * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true
    }
  );

  const display = y.to((py: number) => (py < HEIGHT ? "block" : "none"));

  React.useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.container, mods, [additionalClass, theme, "app_drawer"])}>
        <Overlay handleClick={closeDrawer}/>
        <Spring.a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${HEIGHT - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};
