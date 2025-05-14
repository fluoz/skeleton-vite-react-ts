import { useUser } from "@/hooks/query-hooks/use-user";
import { useUserForm } from "./_form";
import { UserSchemaType } from "./_form/schema";
import { Form } from "@/components/ui/form";
import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { deleteUser, isDeleting } = useUser({ withFetchAll: false });

  const form = useUserForm();

  const onSubmit = async (data: UserSchemaType) => {
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
};

export default HomePage;
