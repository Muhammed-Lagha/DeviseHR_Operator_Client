import { opApiConnection } from '@/utils/ConnectionStrings';
import axios from 'axios'

export const editOperatorDetails = async (token: string, email: string | null, firstName: string | null, lastName: string | null, userId: number | undefined) => {

    try {
        const response = await axios.post(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                userId,
                email,
                firstName,
                lastName
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
