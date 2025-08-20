import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: true,
}));
