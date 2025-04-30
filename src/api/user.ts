import { GetUserResponse, DeleteUserResponse } from "@/types/user.type";
import axios from "axios";

export const userRoutes = {
  getUser: async () => {
    const { data } = await axios.get<GetUserResponse>("/user");
    return data?.data;
  },
  deleteUser: async ({ userId }: { userId: string }) => {
    const { data } = await axios.delete<DeleteUserResponse>(`/user/${userId}`);
    return data?.message;
  },
};
