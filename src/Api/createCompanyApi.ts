import axios from "axios"
import { opApiConnection } from '@/utils/ConnectionStrings';


export const createCompany = async (token: string , companyName: string ,firstName : string, lastName : string , email : string, expirationDate : string, phoneNumber : string, maxEmployeesAllowed : number, licenceNumber : string, accountNumber : string, sendRegistration : boolean) => {
  try{
    const response = await axios.post(
      `${opApiConnection}/api/admin-company/create-company`,
      { 
        companyName, 
        firstName, 
        lastName, 
        email, 
        expirationDate, 
        phoneNumber, 
        maxEmployeesAllowed, 
        licenceNumber, 
        accountNumber, 
        sendRegistration 
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    console.log('Response:', response.data);
    
    return response
  } catch (error) {
    console.error('Error:', error);
  }
}

