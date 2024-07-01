import {create} from 'zustand';

interface User {
  id: number;
  username: string;
  email: string;
  companyName: string;
  typeOfGoods?: string;
  country: string;
  phoneNumber: string;
  isSubscribed: boolean;
  experience?: string;
  // Add other user details as needed
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));