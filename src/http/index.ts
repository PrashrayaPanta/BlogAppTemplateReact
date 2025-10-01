import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_Base_URL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
