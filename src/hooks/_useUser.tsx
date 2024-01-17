import { useMemo } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserState {
  user: User | undefined;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      user: undefined,
      setUser: (usr) => set({ user: usr }),
      removeUser: () => set({ user: undefined }),
    }),
    {
      name: 'storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export function useUser() {
  const { user } = useUserStore((state: any) => state);

  const role = useMemo(() => {
    if (user?.TYPE_OF_USER) {
      return user?.TYPE_OF_USER;
    }
    return null;
  }, [user]);

  const branchCode = useMemo(() => {
    if (user?.NUM_BRANCH_CODE) {
      return `BR_${user?.NUM_BRANCH_CODE}`;
    }
    return '';
  }, [user]);

  return { role, branchCode, user };
}
