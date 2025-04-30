import { UserRole } from "@/types/user.type";

export interface GetUserResponse {
  message: string;
  data: User[];
}

export interface DeleteUserResponse {
  message: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}
