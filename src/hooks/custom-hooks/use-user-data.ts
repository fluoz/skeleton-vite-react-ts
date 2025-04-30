import { TokenData } from "@/types/user.type";
import { useAuthStore } from "../store-hooks/use-auth-store";
import { jwtDecode } from "jwt-decode";

export const useUserData = (): TokenData | null => {
  const { token } = useAuthStore();

  if (!token) return null;

  const decodedToken = jwtDecode(token) as TokenData;

  return decodedToken;
};
