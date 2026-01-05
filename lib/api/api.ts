import axios from "axios";

export const nextServerApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  // withCredentials: true,
});
export interface SessionResponse {
  success: boolean;
}
