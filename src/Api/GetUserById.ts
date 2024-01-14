import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const getUserById = async (token: string , userId: number) => {
    const response = await axios.get(
        `${opApiConnection}/api/company/get-user/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}