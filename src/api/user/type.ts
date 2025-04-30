import { IDataResponse } from "@/types/response.type";
import { UserRole } from "@/types/user.type";

export interface IGetUserResponse extends IDataResponse {
  data: IUser[];
}

export interface IDeleteUserResponse extends IDataResponse {
  data: string;
}

export interface IErrorDeleteUserResponse extends IDataResponse {
  error: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}
