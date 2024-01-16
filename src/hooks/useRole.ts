import { useMemo } from 'react';
import { useUserStore } from '@hooks/useUser';

export function useRole() {
  const { user } = useUserStore((state: any) => state);

  const role = useMemo(() => {
    if (user?.TYPE_OF_USER) {
      return user?.TYPE_OF_USER;
    }
    return null;
  }, [user]);

  return { role };
}
