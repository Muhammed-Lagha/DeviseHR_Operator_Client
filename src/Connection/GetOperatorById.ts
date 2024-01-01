import axios from "axios";
import { opApiConnection, token } from '@/Connection/ConnectionStrings';

export const getOperatorById = async (opId: number) => {
    const response = await axios.get(
        `${opApiConnection}/api/admin-operators/operators/${opId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}