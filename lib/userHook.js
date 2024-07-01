import { useUserStore } from '@/lib/useUserStore';
export const useUserData = () => {
 
  useEffect(() => {
    const user = useUserStore((state) => state.user);
    return { user };
  }, [user]);
};