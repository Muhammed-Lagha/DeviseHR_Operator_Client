import axios from "axios";
import { opApiConnection } from '@/utils/ConnectionStrings';

export const getCompanyById = async (token: string , id: number) => {
    const response = await axios.get(
        `${opApiConnection}/api/company/get-company/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },);
    return response.data.data
}