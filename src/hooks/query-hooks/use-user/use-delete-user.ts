import { api } from "@/api";
import { useWrappedMutation } from "@/lib/utils/wrap-mutation-with-callbacks";
import { User } from "@/types/user.type";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending: isDeleting } = useWrappedMutation(
    api.user.deleteUser,
    {
      onMutate: async (deletedUser) => {
        await queryClient.cancelQueries({ queryKey: ["users"] });
        const previousUsers = queryClient.getQueryData(["users"]);
        queryClient.setQueryData<User[]>(["users"], (oldData) => {
          if (!oldData) return oldData;
          return oldData.filter((user) => user.id !== deletedUser.userId);
        });
        return { previousUsers };
      },
      onError: (error, variables, context) => {
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
    },
  );

  return {
    deleteUser,
    isDeleting,
  };
};
