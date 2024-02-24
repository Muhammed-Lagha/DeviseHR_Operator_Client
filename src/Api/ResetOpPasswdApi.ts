import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const resetPassword = async (token: string ,opId: number) => {
    const response = await axios.patch(
        `${opApiConnection}/api/admin-operators/reset-operator-pswd`,{
            opId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}