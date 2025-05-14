import { z } from "zod";

export const UserSchema = z.object({
  userId: z
    .string({
      required_error: "User ID is required",
      invalid_type_error: "User ID must be a string",
    })
    .min(12, "User ID must be at least 12 characters long"),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
