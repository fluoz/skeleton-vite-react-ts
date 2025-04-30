import cookiesStorage from "@/lib/utils/cookieStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuth = create(
  persist<AuthStore>(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }), // set the token in state
      removeToken: () => set({ token: null }), // remove the token from state
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => cookiesStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
