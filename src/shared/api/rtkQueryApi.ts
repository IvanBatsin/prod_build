import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOCALSTORAGE_KEY } from "shared/const/localStorage";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem(LOCALSTORAGE_KEY) || "";
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({})
});
