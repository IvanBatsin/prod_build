import { NotificationList } from "@/entities/Notification";
import React from "react";
import styles from "./NotificationButton.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { Button, ButtonTypes } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/IconComponent/Icon";
import { Popover } from "@/shared/ui/Popups";
import NotificationIcon from "../../../shared/assets/notification-20-20.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { BrowserView, MobileView } from "react-device-detect";
import { DrawerWrapper } from "@/shared/ui/Drawer/DrawerWrapper";
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider/AnimationProvider";

export const NotificationButton: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = (): void => { setIsDrawerOpen(true) };
  const handleDrawerClose = (): void => { setIsDrawerOpen(false) };

  const trigger = (
    <Button onClick={handleDrawerOpen} theme={ButtonTypes.CLEAR}>
      <Icon inverted SVG={NotificationIcon}/>
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover additionalClass={classNames(styles.container, {}, [additionalClass])} direction="bottom left" trigger={trigger}>
          <NotificationList additionalClass={styles.notifications}/>
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <DrawerWrapper isOpen={isDrawerOpen} handleClose={handleDrawerClose}>
            <NotificationList/>
          </DrawerWrapper>
        </AnimationProvider>
      </MobileView>
    </div>
  );
};
