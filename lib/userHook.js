import { useUserStore } from '@/lib/useUserStore';

export const useUserData = () => {
  const user = useUserStore((state) => state.user);
  return { user };
};
