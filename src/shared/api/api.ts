import axios from "axios";
import { LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

export const axiosApi = axios.create({
  baseURL: __API__
});

axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(LOCALSTORAGE_KEY) || "";
  }
  return config;
});
