import { IDeleteUserResponse, IGetUserResponse } from "./type";
import route from "@/lib/utils/route";
import { API_ROUTES } from "@/lib/constants/router";
import apiClient from "@/lib/api/apiClient";

export const userRoutes = {
  getUser: async () => {
    const { data } = await apiClient.get<IGetUserResponse>(API_ROUTES.USER.GET);
    return data?.data;
  },
  deleteUser: async ({ userId }: { userId: string }) => {
    const { data } = await apiClient.delete<IDeleteUserResponse>(
      route(API_ROUTES.USER.DELETE, { userId: userId }),
    );
    return data?.message;
  },
};
