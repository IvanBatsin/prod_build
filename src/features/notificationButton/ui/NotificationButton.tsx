import { NotificationList } from "entities/Notification";
import React from "react";
import styles from "./NotificationButton.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/IconComponent/Icon";
import { Popover } from "shared/ui/Popups";
import NotificationIcon from "../../../shared/assets/notification-20-20.svg";
import { classNames } from "shared/lib/classNames/classNames";

export const NotificationButton: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;

  return (
    <Popover additionalClass={classNames(styles.container, {}, [additionalClass])} direction="bottom left" trigger={
      <Button theme={ButtonTypes.CLEAR}>
        <Icon inverted SVG={NotificationIcon}/>
      </Button>
    }>
      <NotificationList additionalClass={styles.notifications}/>
    </Popover>
  );
};
