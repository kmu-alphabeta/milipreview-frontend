import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      accessToken: null,
      login: (accessToken: string) => {
        set({ isLoggedIn: true, accessToken });
      },
      logout: () => {
        // 상태 초기화
        set({ isLoggedIn: false, accessToken: null });
        localStorage.clear();
      },
    }),
    {
      name: 'authStore', // localStorage의 key
    },
  ),
);

export default useAuthStore;
