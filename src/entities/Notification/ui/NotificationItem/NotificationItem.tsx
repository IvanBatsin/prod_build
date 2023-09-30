import React from "react";
import styles from "./NotificationItem.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import type { Notification } from "@/entities/Notification/model/types/notifications";
import { Card, CardTheme } from "@/shared/ui/Card/Card";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text/Text";

type NotificationItemProps = CommonComponentProps & {
  item: Notification
}

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  const { additionalClass, item } = props;

  const content = (
    <Card theme={CardTheme.OUTLINE} additionalClass={classNames(styles.container, {}, [additionalClass])}>
      <Text title={item.title} text={item.description}/>
    </Card>
  );

  if (item.href) {
    return (
      <a className={styles.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
