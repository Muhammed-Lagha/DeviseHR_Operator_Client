import { opApiConnection } from '@/utils/ConnectionStrings';
import axios from 'axios'

export const editOperatorRole = async (token: string, user_type : string, userId: number | undefined ) => {
    try {
        console.log(user_type, userId);
        const response = await axios.patch(
            `${opApiConnection}/api/admin-operators/edit-role`,
            {
                opId : Number(userId),
                user_type : Number(user_type)
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        const data = response.data.data
        const message = response.data.message
        console.log("lol222")
        console.log(response);
        return {data , message}
    } catch (error) {
        console.error('Error:', error)
    }
}
