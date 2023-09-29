import { rtkApi } from "shared/api/rtkQueryApi";
import type { Notification } from "../model/types/notifications";

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: "/notifications"
      })
    })
  }),
  overrideExisting: false
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
