import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const sendRegistration = async (token: string ,opId: number) => {
    const response = await axios.get(
        `${opApiConnection}/api/admin-operators/send-registration/${opId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}