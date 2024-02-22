import axios from "axios"
import { opApiConnection } from '@/utils/ConnectionStrings';



export const createOperatorRequest = async (token: string, firstName: string, lastName: string, user_type: string, email: string ,sendRegistration: boolean) => {
  try {
    console.log('Operator details:', { firstName, lastName, user_type, email, sendRegistration });
    const response = await axios.post(
      `${opApiConnection}/api/admin-operators/create-operator`,
      { firstName, lastName, user_type: Number(user_type), email, sendRegistration },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    console.log('Response:', response.data)
    return response
  } catch (error) {
    console.error('Error:', error)
  }
}