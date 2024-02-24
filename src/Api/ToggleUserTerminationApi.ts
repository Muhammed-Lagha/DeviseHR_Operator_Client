import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const toggleUserTermination = async (token: string , userId: number) => {
    const response = await axios.patch(
        `${opApiConnection}/api/manage-company/toggle-termination`,{
            userId : Number(userId)
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
        console.log(response.data.message , response.data.success);
        
    return response.data.message
}