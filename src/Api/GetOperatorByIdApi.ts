import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

const getOperatorById = async (token: string ,opId: number) => {
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

export default getOperatorById