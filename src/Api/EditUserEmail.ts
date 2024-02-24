import { opApiConnection } from '@/utils/ConnectionStrings';
import axios from 'axios'

export const editUserEmail = async (token: string, email: string , userId: number | undefined) => {

    try {
        console.log('lol')
        console.log(typeof email, typeof userId)
        console.log(email, userId)
        const response = await axios.patch(
            `${opApiConnection}/api/manage-company/edit-email`,
            {
                id: userId,
                email
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