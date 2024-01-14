import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const getMe = async (token: string) => {
    const response = await axios.get(`${opApiConnection}/api/operators/me`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}
