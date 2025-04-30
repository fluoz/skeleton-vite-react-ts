import axios from "axios";
import { DeleteUserResponse, GetUserResponse } from "./type";
import route from "@/lib/utils/route";
import { API_ROUTES } from "@/lib/constants/router";

export const userRoutes = {
  getUser: async () => {
    const { data } = await axios.get<GetUserResponse>(API_ROUTES.USER.GET);
    return data?.data;
  },
  deleteUser: async ({ userId }: { userId: string }) => {
    const { data } = await axios.delete<DeleteUserResponse>(
      route(API_ROUTES.USER.DELETE, { userId: userId }),
    );
    return data?.message;
  },
};
