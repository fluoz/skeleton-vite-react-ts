import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, UserSchemaType } from "./schema";

export const useUserForm = () => {
  const form = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
  });

  return form;
};
