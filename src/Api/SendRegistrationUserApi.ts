import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const sendRegistration = async (token: string ,userId: number) => {
  console.log(userId)
    const response = await axios.get(
        `${opApiConnection}/api/manage-company/register-user/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
        console.log(response.data.success);
        
    return response.data.success
}