import { opApiConnection } from '@/utils/ConnectionStrings';
import axios from 'axios'

export const editUserEmail = async (token: string, email: string , userId: number | undefined) => {

    try {
        const response = await axios.post(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                userId,
                email
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data.data
    } catch (error) {
        console.error('Error:', error)
    }
}