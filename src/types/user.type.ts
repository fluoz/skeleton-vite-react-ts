export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface TokenData {
  role: UserRole;
}
