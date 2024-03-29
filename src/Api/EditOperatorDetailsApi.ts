import { opApiConnection } from '@/utils/ConnectionStrings';
import axios from 'axios'

export const editOperatorDetails = async (token: string, email: string | null, lastName: string | null, firstName: string | null, userId: number | undefined) => {
    try {
        
        const response = await axios.patch(
            `${opApiConnection}/api/admin-operators/edit-operator`,
            {
                opId : Number(userId),
                firstName : firstName,
                lastName : lastName,
                email : email
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
