import React from "react";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { useNotifications } from "entities/Notification/api/notificationApi";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { classNames } from "shared/lib/classNames/classNames";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

export const NotificationList: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 7000
  });

  if (isLoading) {
    return (
      <VStack gap="8" justify="start" additionalClass={classNames("", {}, [additionalClass])}>
        <Skeleton width="100%" height="80px" border="8px"/>
        <Skeleton width="100%" height="80px" border="8px"/>
        <Skeleton width="100%" height="80px" border="8px"/>
      </VStack>
    );
  }

  return (
    <VStack gap="8" justify="start" additionalClass={classNames("", {}, [additionalClass])}>
      {data?.map(notification => {
        return <NotificationItem item={notification} key={notification.id}/>;
      })}
    </VStack>
  );
};
