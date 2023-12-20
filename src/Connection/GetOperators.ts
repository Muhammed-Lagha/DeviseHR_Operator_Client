import axios from "axios";
import { opApiConnection, token } from '@/Connection/ConnectionStrings';

export const getOperators = async () => {
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