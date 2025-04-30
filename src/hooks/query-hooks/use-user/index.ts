import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useDeleteUser } from "./use-delete-user";
import { User } from "@/api/user/type";

type UseUserProps = {
  withFetchAll?: boolean;
};

export const useUser = ({ withFetchAll = true }: UseUserProps = {}) => {
  const { data: userData, isLoading: userDataIsLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: api.user.getUser,
    enabled: withFetchAll,
  });

  const { deleteUser, isDeleting } = useDeleteUser();

  return {
    userData,
    userDataIsLoading,
    deleteUser,
    isDeleting,
  };
};
