import { api } from "@/api";
import { IErrorDeleteUserResponse, IUser } from "@/api/user/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: api.user.deleteUser,
    onMutate: async (deletedUser) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previousUsers = queryClient.getQueryData(["users"]);
      queryClient.setQueryData<IUser[]>(["users"], (oldData) => {
        if (!oldData) return oldData;
        return oldData.filter((user) => user.id !== deletedUser.userId);
      });
      return { previousUsers };
    },
    onError: (
      error: AxiosError<IErrorDeleteUserResponse>,
      variables,
      context,
    ) => {
      toast.error(
        "Failed to delete user " + variables.userId + ": " + error.message,
      );

      if (context?.previousUsers) {
        queryClient.setQueryData(["users"], context.previousUsers);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    deleteUser,
    isDeleting,
  };
};
