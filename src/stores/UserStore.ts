import { defineStore } from "pinia";

interface User {
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    id?: number | null;
    profile_picture?: string | null;
    user_role?: string | null;
  }
  
  const useUserStore = defineStore('user', {
    state: (): { user: User } => ({
      user: {
        email: '',
        firstName: '',
        lastName: '',
        id: null,
        profile_picture: null,
        user_role: '',
      },
    }),
  });

export default useUserStore