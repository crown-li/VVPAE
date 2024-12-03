import http from "../utils/axios";

export const getTestMessage = (): Promise<{ message: string }> => {
  return http.get("/test");
};
