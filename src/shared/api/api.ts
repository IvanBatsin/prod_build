import axios from "axios";
import { LOCALSTORAGE_KEY } from "shared/const/localStorage";

export const axiosApi = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: window.localStorage.getItem(LOCALSTORAGE_KEY)
  }
});
