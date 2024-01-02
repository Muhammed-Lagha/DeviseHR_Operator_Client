import axios from "axios";
import { opApiConnection } from '@/Connection/ConnectionStrings';

export const getOperators = async (token: string) => {
    const response = await axios.get(
        `${opApiConnection}/api/admin-operators/operators`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}