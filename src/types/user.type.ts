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

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface TokenData {
  role: UserRole;
}
