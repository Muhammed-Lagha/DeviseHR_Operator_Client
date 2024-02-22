import axios from "axios"
import { opApiConnection } from '@/utils/ConnectionStrings';



export const createOperatorRequest = async (token: string, firstName: string, lastName: string, role: number, email: string ,sendRegistration: boolean) => {
  try {
    console.log('Operator details:', { firstName, lastName, role, email, sendRegistration });
    const response = await axios.post(
      `${opApiConnection}/api/admin-operators/create-operator`,
      { firstName, lastName, role, email, sendRegistration },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    console.log('Response:', response.data)
    return response
  } catch (error) {
    console.error('Error:', error)
  }
}