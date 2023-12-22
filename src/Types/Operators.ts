export interface opMembers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_role: string;
  profile_picture?: string;
  is_verified: boolean;
  is_terminated: boolean;
  updated_at: string;
    }

    // interface User {
    //   id: number;
    //   first_name: string;
    //   last_name: string;
    //   email: string;
    //   user_role: string;
    //   profile_picture: string | null;
    //   is_verified: boolean;
    //   updated_at: string;
    // }
    
    // const users: User[] = [
    //   {
    //     id: 1,
    //     first_name: "Sudo",
    //     last_name: "User",
    //     email: "sudo@devisehr.com",
    //     user_role: "root",
    //     profile_picture: null,
    //     is_verified: true,
    //     updated_at: "2023-12-02T23:23:20.728Z"
    //   }
    // ];