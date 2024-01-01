import axios from "axios"
import { opApiConnection } from '@/Connection/ConnectionStrings';

export const createOperator =async () => {
    const response = await axios.post(
        `${opApiConnection}/api/admin-operators/create-operator`,
        {

        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
    )
    return response
}