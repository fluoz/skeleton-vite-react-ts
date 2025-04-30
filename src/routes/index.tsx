import { useUser } from "@/hooks/query-hooks/use-user";
import {
  UserValidation,
  UserValidationType,
} from "@/validations/user.validation";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { deleteUser, isDeleting } = useUser({ withFetchAll: false });

  const form = useForm<UserValidationType>({
    resolver: zodResolver(UserValidation),
  });

  const onSubmit = async (data: UserValidationType) => {
    deleteUser(data, {
      onSuccess: () => {
        console.log("User deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting user:", error);
      },
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          className="max-w-4xl mx-auto space-y-4 p-4 mt-12 shadow-sm border rounded-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <TextInput
            form={form}
            name="userId"
            label="Id User"
            placeholder="Masukan id user"
          />
          <Button type="submit" disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </form>
      </Form>
    </>
  );
}
