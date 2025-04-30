import { api } from "@/api";
import { User } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";
import { useDeleteUser } from "./use-delete-user";

export const useUser = () => {
  const { data: userData, isLoading: userDataIsLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: api.user.getUser,
  });

  const { deleteUser, isDeleting } = useDeleteUser();

  return {
    userData,
    userDataIsLoading,
    deleteUser,
    isDeleting,
  };
};
